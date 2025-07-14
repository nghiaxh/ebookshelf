import { createRouter, createWebHistory } from "vue-router";
import { isAuthenticated } from "../services/auth.service";

import Home from "../views/Home.vue";

import UserLogin from "../views/UserLogin.vue";
import UserRegister from "../views/UserRegister.vue";

import StaffList from "../views/StaffList.vue";
import StaffEdit from "../views/StaffProfileEdit.vue";
import StaffAdd from "../views/StaffAdd.vue";
import StaffLogin from "../views/StaffLogin.vue";
import StaffProfile from "../views/StaffProfile.vue";

import BookList from "../views/BookList.vue";
import BookAdd from "../views/BookAdd.vue";
import BookEdit from "../views/BookEdit.vue";

import UserList from "../views/UserList.vue";
import UserProfile from "../views/UserProfile.vue";
import UserProfileEdit from "../views/UserProfileEdit.vue";

import Borrow from "../views/Borrow.vue";
import BorrowAdd from "../views/BorrowAdd.vue";
import BorrowEdit from "../views/BorrowEdit.vue";
import PendingBorrow from "../views/PendingBorrow.vue";
import CheckingBorrow from "../views/CheckingBorrow.vue";

import PublisherList from "../views/PublisherList.vue";
import PublisherAdd from "../views/PublisherAdd.vue";
import PublisherEdit from "../views/PublisherEdit.vue";

import NotFound from "../views/NotFound.vue";

const routes = [
  // * working routes
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/user/login",
    name: "user.login",
    component: UserLogin
  },
  {
    path: "/staff/login",
    name: "staff.login",
    component: StaffLogin
  },
  {
    path: "/user/register",
    name: "user.register",
    component: UserRegister
  },
  {
    path: "/userprofile",
    name: "userprofile",
    component: UserProfile,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: "/userprofile/edit/:id",
    name: "userprofile.edit",
    component: UserProfileEdit,
    props: true
  },
  {
    path: "/books",
    name: "booklist",
    component: BookList,
    meta: {
      requiresAuth: true
    },
  },
  // TODO testing routes
  {
    path: "/users",
    name: "userlist",
    component: UserList
  },
  {
    path: "/book/add",
    name: "book.add",
    component: BookAdd
  },
  {
    path: "/book/edit/:id",
    name: "book.edit",
    component: BookEdit,
    props: true
  },
  {
    path: "/borrow",
    name: "borrow",
    component: Borrow
  },
  {
    path: "/borrow/add",
    name: "borrow.add",
    component: BorrowAdd
  },
  {
    path: "/borrow/edit",
    name: "borrow.edit",
    component: BorrowEdit
  },
  {
    path: "/staffs",
    name: "staff.list",
    component: StaffList
  },
  {
    path: "/staffprofile",
    name: "staff.profile",
    component: StaffProfile,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: "/staff/add",
    name: "staff.add",
    component: StaffAdd
  },
  {
    path: "/staff/edit/:id",
    name: "staff.edit",
    component: StaffEdit,
  },
  {
    path: "/publishers",
    name: "publishers",
    component: PublisherList
  },
  {
    path: "/publisher/add",
    name: "publisher.add",
    component: PublisherAdd
  },
  {
    path: "/publisher/edit/:id",
    name: "publisher.edit",
    component: PublisherEdit,
    props: true
  },
  {
    path: "/pendingborrow",
    name: "pendingborrow",
    component: PendingBorrow
  },
  {
    path: "/checkingborrow",
    name: "checkingborrow",
    component: CheckingBorrow
  },
  {
    path: '/:pathMatch(.*)*',
    name: "notfound",
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next("/user/login");
  } else {
    next();
  }
});

export default router;