import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from '@/components/teams/TeamsList';
import TeamMembers from '@/components/teams/TeamMembers';
import UsersList from '@/components/users/UsersList';
import The404 from '@/components/The404';
import TheNavigation from '@/components/nav/TheNavigation';
import TeamsFooter from '@/components/teams/TeamsFooter';
import UsersFooter from '@/components/users/UsersFooter';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      // Метаданные
      // Метаданные доступны в компоненте по маршруту и в наигационной защите
      meta: { needsAuth: true },
      // component: TeamsList,
      components: {
        navigation: TheNavigation,
        default: TeamsList,
        footer: TeamsFooter,
      },
      // alias: '/', // redirect inde page to /teams
      // С Alias url  не меняется, а загружается одинаковый компонент на разных route
      children: [
        // nested routes => вложенные маршруты
        // Можно вкладывать несколько вложенных маршрутов
        {
          name: 'teammembers',
          //  path: '/teams/:id',
          path: ':id', // Убираем path родителя '/teams/:id' => ':id'
          component: TeamMembers,
          props: true, // pass params as props ( :id pass as props )
        },
      ],
    },
    {
      name: 'users',
      path: '/users',
      // component: UsersList,
      components: {
        navigation: TheNavigation,
        default: UsersList,
        footer: UsersFooter,
      },
      // ЛОКАЛЬНЫЕ действия с аутентификацией пользователя при входе на страницу
      // Действия CONFIRM / CANCEL на одиночный маршрут
      // срабатывает при переходе по маршруту /users
      // можно вызвать и в компоненте см. UsersList.vue -> beforeRouteEnter
      beforeEnter: (to, from, next) => {
        //   console.log(to, from);
        next();
      },
    },
    {
      name: 'page404',
      path: '/:notFound(.*)',
      component: The404,
    },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // to -> маршрут на который пришли
    // from -> маршрут с которого пришли
    // savedPosition -> координаты left, top

    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

// =====================
// НАВИГАЦИОННАЯ ЗАЩИТА:
// ======================
// ГЛОБАЛЬНЫЕ действия с аутентификацией пользователя при входе на страницу
// router.beforeEach срабатывет перед любой навигацией независимо какой маршрут используется
// Возвращает функцию, удаляющую зарегистрированную защиту
router.beforeEach(function (to, from, next) {
  if (to.meta.needsAuth) {
    console.log('Нужна аутинтификация !');
    next();
  } else {
    next();
  }
  // to -> маршрут на который пришли
  // from -> маршрут с которого пришли
  // next -> ф-ия, которая вызывается на действие разрешить / запретить переход на страницу
  // ф-ия будет вызвана при переходе с одной страницы на другую

  //   console.log(to, from);
  // next(); // разрешаем навигацию, действие CONFIRM или next(true)
  // next(false); // запрещаем навигацию, действие CANCEL
});

// Добавляет навигационный хук, который выполняется после каждой навигации.
// Возвращает функцию, удаляющую зарегистрированный хук.
// router.afterEach((to, from) => {
//   console.log(to, from);
//   // Используем например при отправке данных аналитики
// });

export default router;
