import React, {Component} from 'react';
import "./App.css";
// import Fusion Charts library
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import './index.css';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
//BsPencilSquare
import { BsPencilSquare } from "react-icons/bs";

import { BsTrashFill } from "react-icons/bs";
//import DeleteIcon from '@mui/icons-material/Delete';


ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);



// multi line chart configuration settings
const chartConfigs_multiline = {
    type: "msline",
    width: '100%',
    height: 350,
    dataFormat: 'json',
    dataSource: {
        chart: {
            //caption: "Cell phones use in any town, 2015 to 2019",
            //yaxisname: "Number of people",
            //subcaption: "2015-2019",
            showhovereffect: "1",
            drawcrossline: "1",
            theme: "fusion",

            //Set border color
            showBorder: "1",
            borderColor: "#ccc",
            bgColor: "#FFFFFF",

            //Tooltip customization
            toolTipBorderColor: "#666666",
            toolTipBgColor: "#efefef",
            toolTipBgAlpha: "80",
            showToolTipShadow: "1",

            //Theme
            plotBorderThickness: "0.25",
            showxaxispercentvalues: "1",
            plottooltext: "<b>$dataValue</b> of youth were on $seriesName",
        },
        categories: [
            {
                category: [
                    {
                        label: "2015"
                    },
                    {
                        label: "2016"
                    },
                    {
                        label: "2017"
                    },
                    {
                        label: "2018"
                    },
                    {
                        label: "2019"
                    }
                ]
            }
        ],
        dataset: [
            {
                seriesname: "Blue",
                data: [
                    {
                        value: "3000"
                    },
                    {
                        value: "4000"
                    },
                    {
                        value: "8000"
                    },
                    {
                        value: "3600"
                    },
                    {
                        value: "3900"
                    }
                ]
            },
            {
                seriesname: "Green",
                data: [
                    {
                        value: "1400"
                    },
                    {
                        value: "1420"
                    },
                    {
                        value: "1500"
                    },
                    {
                        value: "1520"
                    },
                    {
                        value: "1530"
                    }
                ]
            },
            {
                seriesname: "Red",
                data: [
                    {
                        value: "1230"
                    },
                    {
                        value: "6000"
                    },
                    {
                        value: "1280"
                    },
                    {
                        value: "1450"
                    },
                    {
                        value: "1480"
                    }
                ]
            }
        ]
    }
};

const App = () =>{


    const displayEdit = (e) => {
        e.preventDefault();
        // console.log("hey");
        // document.getElement('.raphael-group-105-item ').style.display="flex";
    }
  
        return (
            <div className="container">
                <div className="row">
                    {/*Simple Line section*/}
                    {/* <div className="col-sm-6">
                        <h3>Simple Line Chart</h3>
                        <ReactFC {...chartConfigs_line} />
                    </div> */}

                    {/*Multi Line section*/}
                    <div className="col-sm-6">
                        <div className="flex-based">
                          <button onClick={e => displayEdit(e)}><BsPencilSquare  /></button>
                          <button> < BsTrashFill /></button>
                        </div>
                        <ReactFC {...chartConfigs_multiline} />
                    </div>
                </div>
            </div>)
    
}

export default App;