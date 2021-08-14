import Github from "./pages/github/index";
import Instrumentos from "./pages/instrumentos/viola/index";
import Cursos from "./pages/cursos/index";
import Saibamais from "./pages/saibamais/index";
import Principal from "./pages/principal/index";
import Viola from "./pages/instrumentos/viola/index";
import Guitarras from "./pages/instrumentos/guitarras/index";
import Violinos from "./pages/instrumentos/violinos/index";
import Percus from "./pages/instrumentos/percussao/index";
import Edi from "./pages/instrumentos/edicao/index";
import Rec from "./pages/instrumentos/gravacao/index";
import Sax from "./pages/instrumentos/sopro/index";
import Mais from "./pages/instrumentos/mais/"
import { Component } from "react";

const routerConfig = [
    
    {
        path: '/',
        component: Principal,
        exact: true        
    },
    {
        path: '/ins',
        component: Instrumentos,
        exact: true
    },
    {
        path: '/git',
        component: Github,
        exact: true
    },
    {
        path: '/saiba',
        component: Saibamais,
        exact: true
    },
    {
        path: '/cs',
        component: Cursos,
        exact: true
    },
    {
        path: '/viola',
        Component: Viola,
        exact: true
    },
    {
        path: '/guitarras',
        Component: Guitarras,
        exact: true
    },
    {
        path: '/violinos',
        Component: Violinos,
        exact: true
    },
    {
        path: '/percu',
        Component: Percus,
        exact: true
    },
    {
        path: '/edit',
        Component: Edi,
        exact: true
    },
    {
        path: '/rec',
        Component: Rec,
        exact: true
    },
    {
        path: '/sopro',
        Component: Sax,
        exact: true
    },
    {
        path: '/mais',
        Component: Mais,
        exact: true
    }
]

export default routerConfig;