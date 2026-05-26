export function projectHover() {
    document.addEventListener("DOMContentLoaded", function () {
        const workItems = document.querySelectorAll(".work-item");
        const work = document.querySelector(".work");
        if (!work) return;

        const bgColors = ["bg-color-one", "bg-color-two", "bg-color-three", "bg-color-four"];

        function removeAllBgColorClasses() {
            work.classList.remove(...bgColors);
        }

        workItems.forEach((item, index) => {
            item.addEventListener("mousemove", function () {
                removeAllBgColorClasses();
                work.classList.add("hovered");
                if (bgColors[index]) work.classList.add(bgColors[index]);
            });

            item.addEventListener("mouseout", function () {
                work.classList.remove("hovered");
                removeAllBgColorClasses();
            });
        });
    });
}
