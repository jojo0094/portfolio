import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Kia Ora! I'm <strong className="main-name"> Jo Jo (Aung Kyaw Kyaw) </strong>
        </h1>,
    titles: [
        "Asset Engineer, Matamata-Piako District Council",
        "A 3-Water Engineer solving New Zealand stormwater and water supply challenges",
        "A Data Engineer",
        "A Flood/Urban Stormwater/Water Supply/Waste Water Modeller",
    ],
    about: {
        start: "I've been working for eight years on environmental, water and climate projects. " +
            "I'm excited by learning new things, digging deeper into concepts," +
            " and somtimes naively dreaming for reinventing the wheel.",
        exit: "I'm fluent at Python, geospatial data pre/post processing, BI tools, and more, " +
            "with a deep interest in automated workflow."
    },
    workTimeline: [
        {
    id: "work-5",
    title: "3 Water Asset Management Engineer",
    company: "Matamata-Piako District Council",
    description: `Matamata-Piako District Council · Full-time
Jul 2025 - Present · 8 mos

• Integrated legacy SCADA and live databases to create real-time asset dashboards, improving visibility of network performance and enabling data-driven decisions.
• Managed stormwater asset data, coordinating surveys, as-built data capture, and public consultation for consent processes.
• Reviewed developer-submitted engineering reports for stormwater compliance and asset integrity.
• Coordinated CCTV inspection programmes across wastewater networks to inform maintenance planning.
• Updated and recalibrated water supply models for master planning and lifecycle management.
• Developed a digital-twin water supply model (EPANET) integrating SCADA, billing, and GIS data for Te Aroha.
• Automated RITS asset attribute pipelines, ensuring consistent and unified asset information across systems.`,
    date: "Jul 2025 - Present",
    icon: <BiRocket/>,
    tags: [
        "Asset Management",
        "Digital Twin Development",
        "SCADA Data Integration",
        "Water Network Modelling",
        "Stormwater & Wastewater Condition Assessment",
        "Python/Bash Automation",
        "GDAL/QGIS/Geopandas",
        "PowerBI Dashboards",
        "Regulatory Compliance & LoS Planning"
    ]
},

        {
            id: "work-4",
            title: "Engineer (Water)",
            company: "WSP NZ Ltd",
            description: "Help solve the New Zealand’s 3-water challenges by delivering engineering solutions to government, emergency management, and transport agency, ensuring efficient, sustainable water systems for all. Some projects encompass preliminary stages to detailed design and construction worth in the millions.",
            date: "2022-Present",
            icon: <BiRocket/>,
            tags: ["Automated Model Build", "Flood Modelling (TUFLOW/HECRAS/ICM)","Rainfall-runoff", "Water Supply Master Planning", "Python/Bash scripts", "GDAL/QGIS/Geopandas", "PowerBI", "3-Water Engineering Design Regulatory Compliance (Climate/Level of Service)"] 
        },
        {
            id: "work-3",
            title: "Consultant (Technical Research Associate)",
            company: "International Water Management Institute (IWMI)",
            description: "Collated CORDEX-SEA climate projection data and established a workflow to condut station-based statistical downscaling to be later used in SWAT hydrology model. "+
            "Also led water quality monitoring campaign for sustainable fish farming in Myanmar, staring from project planning, equipment procurement, field data collection, and data analysis.",
            date: "2020-2022",
            icon: <DiCodeigniter/>,
            tags: ["Statistical Downscaling","Extreme Climate Indices", "python/R", "CORDEX-SEA", "Cloud Server", "Water Quality Monitoring" ]
        },
        {
            id: "work-2",
            title: "Researcher (Core Water Modelling Team) - Part-time role",
            company: "Collaboration between IWMI, Manchester University, and Yangon Technological University",
            description: "Assisted in code development for evaluation of metrics such as river segmentation, water supply reliability, and climate resiliency" +
                ",including json/YAML model config file generation for pywr (network resource allocation model).",
            date: "2020-2022",
            icon: <FaMobileAlt/>,
            tags: ["PYWR", "Multi-objective opitmisation", "python", "automated inundation area generation"]
        },
        {
            id: "work-1",
            title: "Institutional Analyst/River Engineer",
            company: "International Geomatics Services Co., Ltd",
            description: "Conducted gap analysis regarding human resources, financial resources, and structure of organisation to finally produce organisational plan, inventory and procurement strategies for an upgraded establishment of a hydrographic office under DWIR (Directorate of Water Resources and Improvement of River Systems), Myanmar." , 
            date: "2019-2020",
            icon: <GiCommercialAirplane/>,
            tags: ["Stakeholder Analysis", "Organisational Survey", "Hydrographic Survey", "Field Operation Procedure"]
        },
        {
            id: "work-0",
            title: "Environmental Engineer",
            company: "E Guard Environmental Services Co., Ltd",
            description: "Contextualize relevant environmental regulations and categorise assessment levels for proposed projects for resource consent applications.",
            date: "2016-2017",
            icon: <BsClipboardData/>,
            tags: ["Environmental Social Impact Assessment", "Environmental Management Planning", "Stakeholder Meeting", "Environmental Monitoring"]
        }
    ]
}


export default homeConfig
