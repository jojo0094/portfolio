import {
    SiPython,
    SiPostgresql,
    SiMicrosoftsqlserver,
    SiDocker,
    SiMicrosoftazure,
    SiRedis,
    SiReact,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiWindowsterminal,
    SiSnowflake,
    SiApacheairflow,
    SiApachekafka,
    SiPowerbi,
    SiQgis,
    SiR,
    SiQt,
    SiDuckdb,
    SiSqlalchemy,
    SiFlask,
    SiHtmx,
    SiLangchain,
    SiGooglebigquery,
    SiDigitalocean,
    SiFlood,
    SiGdal,
    
} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {FaGitAlt} from "react-icons/fa";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiPostgresql size={50}/>,
            text: "Postgres/PostGIS"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiQgis size={50}/>,
            text: "QGIS"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiDocker size={50}/>,
            text: "Docker"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiFlood size={50}/>,
            text: "Flood Modelling"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiR size={50}/>,
            text: "R"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiGdal size={50}/>,
            text: "POSTGIS"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiGdal size={50}/>,
            text: "GDAL"
        },
    ],
    complementarySkills: [

        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiWindowsterminal size={50}/>,
            text: "Bash"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiSnowflake size={50}/>,
            text: "Snowflake"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiApacheairflow size={50}/>,
            text: "Airflow/Kestra"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiCss3 size={50}/>,
            text: "CSS 3"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiHtml5 size={50}/>,
            text: "HTML 5"
        },
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <SiPowerbi size={50}/>,
            text: "Power BI"
        },
        {
            id: "skills-16",
            className: "skill-icon",
            icon: <SiQt size={50}/>,
            text: "PyQt"
        }
    ]
}

export default skillsConfig
