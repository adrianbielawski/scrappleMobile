import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import i18n from './i18n';
import './i18n';
import { colors } from './styles/colors';
import { GameMenu } from './components/game_menu/gameMenu';
import { Game } from './components/game/game';
import { SubtractPoints } from './components/subtract_points/subtractPoints';
import { GameSummary } from './components/game-summary/gameSummary';

export default function App() {
	const [language, setLanguage] = useState('en-GB');
	const [screen, setScreen] = useState('GameMenu')
	const [timer, setTimer] = useState(true);
	const [time, setTime] = useState({min: '01', sec: '00'});
	const [players, setPlayers] = useState(['Adrian', 'Joanna']);
	const [playersSummary, setPlayersSummary] = useState([]);

	const changeLanguage = (lang) => {
		setLanguage(lang)
		i18n.changeLanguage(lang);
	}
	
	const startGame = (timer, time, players) => {
		setTimer(timer);
		setTime(time);
		setPlayers(players);
		setScreen('Game');
		getPlayers(players);
	}

	const getPlayers = (playersNames) => {    
		let players = playersNames.map((player, index) => {
			return {
				name: player,
				id: index,
				score: 0,
				bestScore: 0,
				allPoints: [],
			}
		});

		setPlayers(players)
	}

	const finishGame = () => {
		setScreen('SubtractPoints')
	}

 	const getPlaces = (players) => {
		setNextGamePlayers(players)
		let sortedPlayers = players.sort((a, b) => {
			return b.score - a.score
		});

		let previousPlayerScore = '';
		let previousPlayerPlaceText = '';
		let previousPlace = '';
		let summary = sortedPlayers.map((player, index) => {
			let place = {};
			switch(index) {
				case 0:
					place.text = "1st";
					place.num = 1;
					break
				case 1:
					place.text = "2nd";
					place.num = 2;
					break
				case 2:
					place.text = "3rd";
					place.num = 3;
					break
				case 3:
					place.text = "4th";
					place.num = 4;
					break
			};
			
			if(player.score === previousPlayerScore) {
				place.text = previousPlayerPlaceText
				place.num = previousPlace
			};

			previousPlayerScore = player.score;
			previousPlayerPlaceText = place.text;
			previousPlace = place.num;

			player.place = place
			return player
		});


		setPlayersSummary(summary);
		setScreen('GameSummary');
  	}
  
	const setNextGamePlayers = (players) => {
		const names = players.map((player) => {
			return player.name
		})
		setPlayers(names)
	}

	const exitGame = () => {
		setScreen('GameMenu');
	}

	const getContent = () => {
		let content = '';   
		switch(screen) {
		case 'GameMenu':
			content = <GameMenu language={language} changeLanguage={changeLanguage} startGame={startGame} players={players} timer={timer} time={time}/>
			break;
		case 'Game':
			content = <Game language={language} players={players} timer={timer} time={time} finishGame={finishGame}/>;
			break;
		case 'SubtractPoints':
			content = <SubtractPoints players={players} getPlaces={getPlaces}/>;
			break;
		case 'GameSummary':
			content = <GameSummary players={playersSummary} exitGame={exitGame}/>;
			break;
		}
		return content
	}

	return (
		<View style={styles.container}>
			{getContent()}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background
	},
});
