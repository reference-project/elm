import Vue from 'vue';
import App from './App';
import routerConfing from 'components/router';
import VueResource from 'vue-resource';
import Router from 'vue-router';
import 'common/stylus/index.styl';

Vue.use(Router);
Vue.use(VueResource);
var router = new Router({
	linkActiveClass: 'active'
});
router.map(routerConfing);
router.beforeEach(function () {
	window.scrollTo(0, 0);
});
router.go('/index');
router.start(App, 'app');
