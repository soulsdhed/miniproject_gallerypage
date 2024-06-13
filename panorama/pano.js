/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

// const Boxlayout = (() => {
//     const wrapper = document.body,
//         sections = [...document.querySelectorAll(".section")],
//         closeButtons = [...document.querySelectorAll(".close-section")],
//         expandedClass = "is-expanded",
//         hasExpandedClass = "has-expanded-item";

//     const initEvents = () => {
//         sections.forEach((element) => {
//             element.addEventListener("click", () => openSection(element));
//         });
//         closeButtons.forEach((element) => {
//             element.addEventListener("click", (event) => {
//                 event.stopPropagation();
//                 closeSection(element.parentElement);
//             });
//         });
//     };

//     const openSection = (element) => {
//         if (element.classList.contains(expandedClass)) return;
//         element.classList.add(expandedClass);
//         wrapper.classList.add(hasExpandedClass);
//     };

//     const closeSection = (element) => {
//         if (!element.classList.contains(expandedClass)) return;
//         element.classList.remove(expandedClass);
//         wrapper.classList.remove(hasExpandedClass);
//     };

//     return { init: initEvents };
// })();

// Boxlayout.init();

const panoramaDivs = document.getElementsByClassName("panorama");
const imgSources = [
    "angra.jpg",
    "b.jpg",
    "c.jpg",
    "d.jpg",
    "hong-kong-7361979.jpg",
    "e.jpg",
];
for (let i = 0; i < panoramaDivs.length; i++) {
    // Create viewer.
    var viewer = new Marzipano.Viewer(panoramaDivs[i]);

    // Create source.
    var source = Marzipano.ImageUrlSource.fromString("imgs/" + imgSources[i]);

    // Create geometry.
    var geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);

    // Create view.
    var limiter = Marzipano.RectilinearView.limit.traditional(
        1024,
        (100 * Math.PI) / 180
    );
    var view = new Marzipano.RectilinearView({ yaw: Math.PI }, limiter);

    // Create scene.
    var scene = viewer.createScene({
        source: source,
        geometry: geometry,
        view: view,
        pinFirstLevel: true,
    });

    // Display scene.
    scene.switchTo();
}
