const Boxlayout = (() => {
    const wrapper = document.body,
        sections = [...document.querySelectorAll(".section")],
        closeButtons = [...document.querySelectorAll(".close-section")],
        expandedClass = "is-expanded",
        hasExpandedClass = "has-expanded-item";

    const initEvents = () => {
        sections.forEach((element) => {
            element.addEventListener("click", () => openSection(element));
        });
        closeButtons.forEach((element) => {
            element.addEventListener("click", (event) => {
                event.stopPropagation();
                closeSection(element.parentElement);
            });
        });
    };

    const openSection = (element) => {
        if (element.classList.contains(expandedClass)) return;
        element.classList.add(expandedClass);
        wrapper.classList.add(hasExpandedClass);
    };

    const closeSection = (element) => {
        if (!element.classList.contains(expandedClass)) return;
        element.classList.remove(expandedClass);
        wrapper.classList.remove(hasExpandedClass);
    };

    return { init: initEvents };
})();

Boxlayout.init();

const panoramas = document.getElementsByClassName("panorama");
let currentSelectedPanorama = 0;
for (let i = 0; i < panoramas.length; i++) {
    panoramas[i].addEventListener("mouseover", (event) => {
        // 마우스가 들어가면
        // 블러 제거
        panoramas[i].classList.remove("blur");
        // 현재 선택된 화면을 설정
        currentSelectedPanorama = i;

        // 해당 번호를 제외한 나머지 panorama에 blur확인 후 추가
        for (let j = 0; j < panoramas.length; j++) {
            if (i === j) continue;
            if (!panoramas[j].classList.contains("blur")) {
                panoramas[j].classList.add("blur");
            }
        }
        // console.log(i);
    });

    // panoramas[i].addEventListener("mouseout", (event) => {
    //     panoramas[i].classList.add("blur");
    // });
}

console.log(panoramas);
