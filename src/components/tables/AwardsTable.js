import React from "react";
import tw from "twin.macro";
// import styled from "styled-components";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
// const Container = tw.div`flex flex-col`;

export default () => {
    return (
        <Container>
            <ContentWithPaddingXl>
                <section className="relative py-16 bg-blueGray-50">
                    <div className="w-full mb-12 px-4">
                        <div
                            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
  bg-pink-900 text-white"
                        >
                            <div className="rounded-t mb-0 px-4 py-3 border-0">
                                <div className="flex flex-wrap items-center">
                                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                                        <h3 className="font-semibold text-lg text-white">
                                            Card Tables
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="block w-full overflow-x-auto ">
                                <table className="items-center w-full bg-transparent border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                                                Project
                                            </th>
                                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                                                Budget
                                            </th>
                                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                                                Status
                                            </th>
                                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                                                Users
                                            </th>
                                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                                                Completion{" "}
                                            </th>
                                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                                <img
                                                    src="https://demos.creative-tim.com/notus-js/assets/img/bootstrap.jpg"
                                                    className="h-12 w-12 bg-white rounded-full border"
                                                    alt="..."
                                                />
                                                <span className="ml-3 font-bold text-white">
                                                    {" "}
                                                    Argon Design System{" "}
                                                </span>
                                            </th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                $2,500 USD
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <i className="fas fa-circle text-orange-500 mr-2" />
                                                pending
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div className="flex">
                                                    <img
                                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                                    />
                                                    <img
                                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                    />
                                                    <img
                                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg"
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                    />
                                                    <img
                                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png"
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                    />
                                                </div>
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div className="flex items-center">
                                                    <span className="mr-2">
                                                        60%
                                                    </span>
                                                    <div className="relative w-full">
                                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                                            <div
                                                                style={{
                                                                    width: "60%",
                                                                }}
                                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                                <a
                                                    href="#pablo"
                                                    className="text-blueGray-500 block py-1 px-3"
                                                    onclick="openDropdown(event,'table-dark-1-dropdown')"
                                                >
                                                    <i className="fas fa-ellipsis-v" />
                                                </a>
                                                <div
                                                    className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                                                    id="table-dark-1-dropdown"
                                                >
                                                    <a
                                                        href="#pablo"
                                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                    >
                                                        Action
                                                    </a>
                                                    <a
                                                        href="#pablo"
                                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                    >
                                                        Another action
                                                    </a>
                                                    <a
                                                        href="#pablo"
                                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                    >
                                                        Something else here
                                                    </a>
                                                    <div className="h-0 my-2 border border-solid border-blueGray-100" />
                                                    <a
                                                        href="#pablo"
                                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                    >
                                                        Seprated link
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                                <img
                                                    src="https://demos.creative-tim.com/notus-js/assets/img/angular.jpg"
                                                    className="h-12 w-12 bg-white rounded-full border"
                                                    alt="..."
                                                />
                                                <span className="ml-3 font-bold text-white">
                                                    Angular Now UI Kit PRO{" "}
                                                </span>
                                            </th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                $1,800 USD
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <i className="fas fa-circle text-emerald-500 mr-2" />
                                                completed
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div className="flex">
                                                    <img
                                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                                    />
                                                    <img
                                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                    />
                                                    <img
                                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg"
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                    />
                                                    <img
                                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png"
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                    />
                                                </div>
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div className="flex items-center">
                                                    <span className="mr-2">
                                                        100%
                                                    </span>
                                                    <div className="relative w-full">
                                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-500">
                                                            <div
                                                                style={{
                                                                    width: "30%",
                                                                }}
                                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                                <a
                                                    href="#pablo"
                                                    className="text-blueGray-500 block py-1 px-3"
                                                    onclick="openDropdown(event,'table-dark-1-dropdown')"
                                                >
                                                    <i className="fas fa-ellipsis-v" />
                                                </a>
                                                <div
                                                    className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                                                    id="table-dark-1-dropdown"
                                                >
                                                    <a
                                                        href="#pablo"
                                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                    >
                                                        Action
                                                    </a>
                                                    <a
                                                        href="#pablo"
                                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                    >
                                                        Another action
                                                    </a>
                                                    <a
                                                        href="#pablo"
                                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                    >
                                                        Something else here
                                                    </a>
                                                    <div className="h-0 my-2 border border-solid border-blueGray-100" />
                                                    <a
                                                        href="#pablo"
                                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                    >
                                                        Seprated link
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                                <img
                                                    src="https://demos.creative-tim.com/notus-js/assets/img/sketch.jpg"
                                                    className="h-12 w-12 bg-white rounded-full border"
                                                    alt="..."
                                                />
                                                <span className="ml-3 font-bold text-white">
                                                    Black Dashboard Sketch
                                                </span>
                                            </th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                $3,150 USD
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <i className="fas fa-circle text-orange-500 mr-2" />
                                                delayed
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div className="flex">
                                                    <img
                                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                                    />
                                                    <img
                                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                    />
                                                    <img
                                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg"
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                    />
                                                    <img
                                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png"
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                    />
                                                </div>
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div className="flex items-center">
                                                    <span className="mr-2">
                                                        73%
                                                    </span>
                                                    <div className="relative w-full">
                                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                                            <div
                                                                style={{
                                                                    width: "73%",
                                                                }}
                                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                                <a
                                                    href="#pablo"
                                                    className="text-blueGray-500 block py-1 px-3"
                                                    onclick="openDropdown(event,'table-dark-1-dropdown')"
                                                >
                                                    <i className="fas fa-ellipsis-v" />
                                                </a>
                                                <div
                                                    className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                                                    id="table-dark-1-dropdown"
                                                >
                                                    <a
                                                        href="#pablo"
                                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                    >
                                                        Action
                                                    </a>
                                                    <a
                                                        href="#pablo"
                                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                    >
                                                        Another action
                                                    </a>
                                                    <a
                                                        href="#pablo"
                                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                    >
                                                        Something else here
                                                    </a>
                                                    <div className="h-0 my-2 border border-solid border-blueGray-100" />
                                                    <a
                                                        href="#pablo"
                                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                    >
                                                        Seprated link
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                                <img
                                                    src="https://demos.creative-tim.com/notus-js/assets/img/react.jpg"
                                                    className="h-12 w-12 bg-white rounded-full border"
                                                    alt="..."
                                                />
                                                <span className="ml-3 font-bold text-white">
                                                    React Material Dashboard
                                                </span>
                                            </th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                $4,400 USD
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <i className="fas fa-circle text-teal-500 mr-2" />
                                                on schedule
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div className="flex">
                                                    <img
                                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                                    />
                                                    <img
                                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                    />
                                                    <img
                                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg"
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                    />
                                                    <img
                                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png"
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                    />
                                                </div>
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div className="flex items-center">
                                                    <span className="mr-2">
                                                        90%
                                                    </span>
                                                    <div className="relative w-full">
                                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
                                                            <div
                                                                style={{
                                                                    width: "90%",
                                                                }}
                                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                                <a
                                                    href="#pablo"
                                                    className="text-blueGray-500 block py-1 px-3"
                                                    onclick="openDropdown(event,'table-dark-1-dropdown')"
                                                >
                                                    <i className="fas fa-ellipsis-v" />
                                                </a>
                                                <div
                                                    className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                                                    id="table-dark-1-dropdown"
                                                >
                                                    <a
                                                        href="#pablo"
                                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                    >
                                                        Action
                                                    </a>
                                                    <a
                                                        href="#pablo"
                                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                    >
                                                        Another action
                                                    </a>
                                                    <a
                                                        href="#pablo"
                                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                    >
                                                        Something else here
                                                    </a>
                                                    <div className="h-0 my-2 border border-solid border-blueGray-100" />
                                                    <a
                                                        href="#pablo"
                                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                    >
                                                        Seprated link
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                                <img
                                                    src="https://demos.creative-tim.com/notus-js/assets/img/vue.jpg"
                                                    className="h-12 w-12 bg-white rounded-full border"
                                                    alt="..."
                                                />
                                                <span className="ml-3 font-bold text-white">
                                                    Vue Material Dashboard
                                                </span>
                                            </th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                $2,200USD
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <i className="fas fa-circle text-emerald-500 mr-2" />
                                                completed
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div className="flex">
                                                    <img
                                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                                    />
                                                    <img
                                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                    />
                                                    <img
                                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg"
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                    />
                                                    <img
                                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png"
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                    />
                                                </div>
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div className="flex items-center">
                                                    <span className="mr-2">
                                                        100%
                                                    </span>
                                                    <div className="relative w-full">
                                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                                                            <div
                                                                style={{
                                                                    width: "100%",
                                                                }}
                                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                                <a
                                                    href="#pablo"
                                                    className="text-blueGray-500 block py-1 px-3"
                                                    onclick="openDropdown(event,'table-dark-1-dropdown')"
                                                >
                                                    <i className="fas fa-ellipsis-v" />
                                                </a>
                                                <div
                                                    className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                                                    id="table-dark-1-dropdown"
                                                >
                                                    <a
                                                        href="#pablo"
                                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                    >
                                                        Action
                                                    </a>
                                                    <a
                                                        href="#pablo"
                                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                    >
                                                        Another action
                                                    </a>
                                                    <a
                                                        href="#pablo"
                                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                    >
                                                        Something else here
                                                    </a>
                                                    <div className="h-0 my-2 border border-solid border-blueGray-100" />
                                                    <a
                                                        href="#pablo"
                                                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                    >
                                                        Seprated link
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </ContentWithPaddingXl>
        </Container>
    );
};

// import React from "react";
// import tw from "twin.macro";
// import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
// import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
// import EmailIllustrationSrc from "images/email-illustration.svg";
// const Container = tw.div`relative`;
// const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
// const Label = tw.label`flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-100 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out`;
// const Input = tw.input`sr-only`;
// const Content = tw.div`absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[97vw] mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1`;

// export default () => {
//     return (
//         <Container>
//             <TwoColumn>
{
    /* <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b text-green-500 border-gray-200 sm:rounded-lg">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeadCell
                                        scope="col"
                                    >
                                        Title
                                    </TableHeadCell>
                                    <TableHeadCell>
                                        Impact
                                    </TableHeadCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {awards.map((award) => (
                                    <TableRow key={award.title}>
                                        <TableDataCell>
                                            <AwardTitle>{award.title}</AwardTitle>
                                        </TableDataCell>
                                        <TableDataCell>
                                            <a href={award.url}>
                                                <AwardType>
                                                    {award.type}
                                                </AwardType>
                                            </a>
                                        </TableDataCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div> */
}
//                 <li className="">
//                     <Input
//                         className="peer"
//                         type="radio"
//                         defaultValue="yes"
//                         name="answer"
//                         id="yes"
//                         defaultChecked=""
//                     />
//                     <Label
//                         htmlFor="yes"
//                     >
//                         Details
//                     </Label>
//                     <Content className="">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
//                         voluptatum! Sequi consequatur error nulla quaerat rem fugit provident
//                         tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse,
//                         mollitia? Nostrum? Lorem ipsum dolor sit amet consectetur adipisicing
//                         elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat
//                         rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi
//                         qui? Esse, mollitia? Nostrum? Lorem ipsum dolor sit amet consectetur
//                         adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error
//                         nulla quaerat rem fugit provident tempore nihil a aspernatur ad
//                         laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem ipsum dolor
//                         sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi
//                         consequatur error nulla quaerat rem fugit provident tempore nihil a
//                         aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
//                     </Content>
//                 </li>
//                 <li className="">
//                     <Input
//                         className="peer"
//                         type="radio"
//                         defaultValue="no"
//                         name="answer"
//                         id="no"
//                     />
//                     <Label
//                         htmlFor="no"
//                     >
//                         About
//                     </Label>
//                     <Content>
//                         2Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
//                         voluptatum! Sequi consequatur error nulla quaerat rem fugit provident
//                         tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse,
//                         mollitia? Nostrum? Lorem ipsum dolor sit amet consectetur adipisicing
//                         elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat
//                         rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi
//                         qui? Esse, mollitia? Nostrum? Lorem ipsum dolor sit amet consectetur
//                         adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error
//                         nulla quaerat rem fugit provident tempore nihil a aspernatur ad
//                         laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
//                     </Content>
//                 </li>
//                 <li className="">
//                     <Input
//                         className="peer"
//                         type="radio"
//                         defaultValue="yesno"
//                         name="answer"
//                         id="yesno"
//                     />
//                     <Label
//                         htmlFor="yesno"
//                     >
//                         Something
//                     </Label>
//                     <Content>
//                         3Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
//                         voluptatum! Sequi consequatur error nulla quaerat rem fugit provident
//                         tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse,
//                         mollitia? Nostrum? Lorem ipsum dolor sit amet consectetur adipisicing
//                         elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat
//                         rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi
//                         qui? Esse, mollitia? Nostrum? Lorem ipsum dolor sit amet consectetur
//                         adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error
//                         nulla quaerat rem fugit provident tempore nihil a aspernatur ad
//                         laboriosam, dolor nisi qui? Esse, mollitia? Nostrum? Lorem ipsum dolor
//                         sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi
//                         consequatur error nulla quaerat rem fugit provident tempore nihil a
//                         aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
//                     </Content>
//                 </li>
//             </TwoColumn>
//         </Container>

//     );
// }

const awardsData = [
    {
        _id: "654798109f19195e5d6a0d2a",
        title: "Sample News222222",
        type: "awards",
        date: "2023-11-05T13:26:37.678Z",
        year: 2021,
        link: "https://www.google.com",
        slides: "https://www.google.com",
        video: "https://www.google.com",
    },
    {
        _id: "654798459f19195e5d6a0d2b",
        title: "Sample News",
        type: "awards",
        date: "2023-11-05T13:27:33.521Z",
        year: 2021,
        link: "https://www.google.com",
        slides: "https://www.google.com",
        video: "https://www.google.com",
    },
    {
        _id: "654798479f19195e5d6a0d2c",
        title: "Sample News",
        type: "awards",
        date: "2023-11-05T13:27:35.237Z",
        year: 2021,
        link: "https://www.google.com",
        slides: "https://www.google.com",
        video: "https://www.google.com",
    },
    {
        _id: "654798499f19195e5d6a0d2d",
        title: "Sample News",
        type: "awards",
        date: "2023-11-05T13:27:37.078Z",
        year: 2021,
        link: "https://www.google.com",
        slides: "https://www.google.com",
        video: "https://www.google.com",
    },
    {
        _id: "6547ae618f6034eb98fee1bb",
        title: "Sample News",
        type: "awards",
        date: "2023-11-05T15:01:53.724Z",
        year: 2021,
        link: "https://www.google.com",
        slides: "https://www.google.com",
        video: "https://www.google.com",
        created_at: "2023-11-05T15:01:53.724Z",
        updated_at: "2023-11-05T15:01:53.724Z",
    },
    {
        _id: "6547aed08f6034eb98fee1bc",
        title: "Sample News222",
        type: "awards",
        date: "2023-11-05T15:03:44.134Z",
        year: 2021,
        link: "https://www.google.com",
        slides: "https://www.google.com",
        video: "https://www.google.com",
        created_at: "2023-11-05T15:03:44.134Z",
        updated_at: "2023-11-05T15:03:44.134Z",
    },
    {
        _id: "6547d4eb0c79a7ce76ba4e13",
        title: "Sample News",
        type: "awards",
        date: "2023-11-05T17:46:16.467Z",
        year: 2021,
        link: "https://www.google.com",
        slides: "https://www.google.com",
        video: "https://www.google.com",
        created_at: "2023-11-05T17:46:16.467Z",
        updated_at: "2023-11-05T17:46:16.467Z",
    },
    {
        _id: "6548756916dc0e86e84cd880",
        title: "Sample News222",
        type: "awards",
        date: "2023-11-06T05:11:05.291Z",
        year: 2021,
        link: "https://www.google.com",
        slides: "https://www.google.com",
        video: "https://www.google.com",
        created_at: "2023-11-06T05:11:05.291Z",
        updated_at: "2023-11-06T05:11:05.291Z",
    },
    {
        _id: "6555eef3ad39dfb7f8862c08",
        title: "Sample News222222",
        type: "awards",
        date: "2023-11-16T10:29:04.485Z",
        year: 2021,
        link: "https://www.google.com",
        slides: "https://www.google.com",
        video: "https://www.google.com",
    },
    {
        _id: "6555ef23ad39dfb7f8862c09",
        title: "Sample News222222",
        type: "awards",
        date: "2023-11-16T10:29:55.592Z",
        year: 2021,
        link: "https://www.google.com",
        slides: "https://www.google.com",
        video: "https://www.google.com",
    },
    {
        _id: "655736bd510bae7b9d658b52",
        title: "Sample News222222",
        type: "awards",
        year: 2021,
        link: "https://www.google.com",
        slides: "https://www.google.com",
        video: "https://www.google.com",
        __v: 0,
    },
];
