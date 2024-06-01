

import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

import { ToastContainer } from 'react-toastify';
import { AnasayfaFn } from "./components/Anasayfa";


export default function App() {
  return (
    <div>
      <div className="bg-white shadow mb-8">
        <ToastContainer />
        <nav className="flex gap-2 justify-center max-w-xl mx-auto text-zinc-500">
          <NavLink
            to="/"
            exact
            className="p-4 pb-3 tracking-tighter"
            activeClassName="text-amber-600"
          >
            Anasayfa
          </NavLink>
          <NavLink
            to="/notlar"
            className="p-4 pb-3 tracking-tighter"
            activeClassName="text-amber-600"
          >
            Tüm Notlar
          </NavLink>
          <NavLink
            to="/yeni-not"
            className="p-4 pb-3 tracking-tighter"
            activeClassName="text-amber-600"
          >
            Yeni Not
          </NavLink>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
         <AnasayfaFn/>
        </Route>
        <Route path="/yeni-not">
          <div className="max-w-md sm:max-w-4xl mx-auto px-4 pb-8">
            <PostForm />
          </div>
        </Route>

        <Route path="/notlar">
          <div className="max-w-md mx-auto px-4 pb-8">
            <PostList />
          </div>
        </Route>
      </Switch>
    </div>
  );
}
