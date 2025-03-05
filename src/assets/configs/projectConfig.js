import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

//import sklearnGenetic from "../images/sklearn_genetic_opt.png"
import reemissionImage from "../images/reemisionImage.png"
import eraingestionimage from "../images/aigenerated.png"
//import kafkaMl from "../images/kafkaml.png"
import portfolio from "../images/portfolio.png"

import React from 'react'

const projectConfig = [

    {
        id: "project-5",
        title: "ERA5 Reanalysis Data Ingestion Pipeline",
        links: [
            {
                name: "repo",
                url: "https://github.com/jojo0094/ReanalysisIngestion",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/jojo0094/ReanalysisIngestion",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/jojo0094/ReanalysisIngestion",
                icon: <AiFillEye/>
            }
        ],
        image: eraingestionimage,
        description: "This project retrieve ERA5 reanalysis data from my personal temporary GCP bucket, and ingest it into a PostgreSQL database. The data is then used for further analysis and visualization. This will serve as a precursor to a more complex data pipeline for climate data using distributed computing, orchestration, and storage later",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Python Design Patterns discussion creating simple climate indices dashboard",
        links: [
            {
                name: "repo",
                url: "https://github.com/jojo0094/ClimdexDash",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/jojo0094/ClimdexDash",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/jojo0094/ClimdexDash",
                icon: <AiFillEye/>
            },
            {
                name: "docs",
                url: "https://github.com/jojo0094/ClimdexDash",
                icon: <ImBook/>,
            }
        ],
        image: "https://climate.copernicus.eu/sites/default/files/inline-images/figure7_0.png",
        description: "A Plotly-based Dashboard for Extreme Climate Indices. This project demonstrates the Strategy Design Pattern to handle multiple data sources (CSV, PostgreSQL, etc.) for retrieving and visualizing total precipitation time series data. The implementation ensures scalability, maintainability, and flexibility by decoupling data retrieval logic from the dashboard setup.",
        target: "_blank"
    },
    {

        id: "project-3",
        title: "Reemission",
        links: [
            {
                name: "repo",
                url: "https://github.com/tomjanus/reemission",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/tomjanus/reemission",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/tomjanus/reemission",
                icon: <AiFillEye/>,
            },
            {
                name: "docs",
                url: "https://github.com/tomjanus/reemission",
                icon: <ImBook/>,
            }
        ],
        image: reemissionImage,
        description: "Re-Emission is a Python library and a command line interface (CLI) tool for estimating CO2, CH4 and N2O emissions from reservoirs. It depends on the geoCARET for upstream delineation, which was derived from my prototype of the same functionality using whitebox tools.",
        target: "_blank"
    },
]

export default projectConfig
