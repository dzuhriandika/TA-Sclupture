import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import HomeScreen from '../screens/Home';
import DefinitionScreen from '../screens/Definition';
import TypeScreen from '../screens/Type';
import MateriScreen from '../screens/Materi';
import GalleryScreen from '../screens/Gallery';
import QuizScreen from '../screens/Quiz';
import TestScreen from '../screens/Test';
import ProfileScreen from '../screens/Profile';
import AboutUsScreen from '../screens/AboutUs';
import MakingScreen from '../screens/Making';
import BGarudaScreen from '../screens/BatikGaruda';
import BGentonganScreen from '../screens/BatikGentongan';
import BJeparaScreen from '../screens/BatikJepara';
import BKawungScreen from '../screens/BatikKawung';
import BKeratonScreen from '../screens/BatikKeraton';
import BMegaMendungScreen from '../screens/BatikMegaMendung';
import SplashScreen from '../screens/SplashScreen';
import Bantuan from '../screens/Bantuan';
import PlayQuizScreen from '../screens/PlayQuiz';
import ScoreScreen from '../screens/Score';
import TutorialScreen from '../screens/Tutorial';
import PembahasanScreen from '../screens/Pembahasan';
import ScoreTestScreen from '../screens/ScoreTest';
import PlayTestScreen from '../screens/PlayTest';
import News1Screen from '../screens/News1';
import News2Screen from '../screens/News2';

export const SplashScreenStack = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export const LoginStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {initialRouteParams: 'Login'},
);

export const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Definition: {
      screen: DefinitionScreen,
      navigationOptions: {
        header: null,
      },
    },
    Type: {
      screen: TypeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Making: {
      screen: MakingScreen,
      navigationOptions: {
        header: null,
      },
    },
    Garuda: {
      screen: BGarudaScreen,
      navigationOptions: {
        header: null,
      },
    },
    Gentongan: {
      screen: BGentonganScreen,
      navigationOptions: {
        header: null,
      },
    },
    Jepara: {
      screen: BJeparaScreen,
      navigationOptions: {
        header: null,
      },
    },
    Kawung: {
      screen: BKawungScreen,
      navigationOptions: {
        header: null,
      },
    },
    Keraton: {
      screen: BKeratonScreen,
      navigationOptions: {
        header: null,
      },
    },
    MegaMendung: {
      screen: BMegaMendungScreen,
      navigationOptions: {
        header: null,
      },
    },
    Materi: {
      screen: MateriScreen,
      navigationOptions: {
        header: null,
      },
    },
    Quiz: {
      screen: QuizScreen,
      navigationOptions: {
        header: null,
      },
    },
    Test: {
      screen: TestScreen,
      navigationOptions: {
        header: null,
      },
    },
    PlayQuiz: {
      screen: PlayQuizScreen,
      navigationOptions: {
        header: null,
      },
    },
    Score: {
      screen: ScoreScreen,
      navigationOptions: {
        header: null,
      },
    },
    Tutorial: {
      screen: TutorialScreen,
      navigationOptions: {
        header: null,
      },
    },
    Pembahasan: {
      screen: PembahasanScreen,
      navigationOptions: {
        header: null,
      },
    },
    PlayTest: {
      screen: PlayTestScreen,
      navigationOptions: {
        header: null,
      },
    },
    ScoreTest: {
      screen: ScoreTestScreen,
      navigationOptions: {
        header: null,
      },
    },

    Berita1: {
      screen: News1Screen,
      navigationOptions: {
        header: null,
      },
    },

    Berita2: {
      screen: News2Screen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {initialRouteParams: 'Home'},
);

HomeStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export const GalleryStack = createStackNavigator(
  {
    QuizTest: {
      screen: GalleryScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {initialRouteParams: 'QuizTest'},
);

GalleryStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null,
      },
    },
    AboutUs: {
      screen: AboutUsScreen,
      navigationOptions: {
        header: null,
      },
    },
    Bantuan: {
      screen: Bantuan,
      navigationOptions: {
        header: null,
      },
    },
  },
  {initialRouteParams: 'Profile'},
);

ProfileStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};
