
const allBatches = document.querySelectorAll(".curriculum aside section")


allBatches.forEach(batch => {
    batch.addEventListener("click", (e) => {
        // alert("clicked")
        batch.classList.add("selected__active")
        batch.style.opacity = "1"; // Set opacity to 1 when selected

        // automatically remove styling if different batch is selected (navigated to diff batch)
        allBatches.forEach(otherBatch => {
            if (otherBatch !== batch) {
                otherBatch.classList.remove("selected__active")
                otherBatch.style.opacity = "0.45"; // Reset opacity for non-selected batches
            }
        })
    })
})



// HARDCODED DROPDOWN
const dropdown = document.querySelector(".dropdown");
const selectOptions = document.querySelector(".select-options")
const dropDownIcon = document.querySelector(".dropdown-icon");

const options = document.querySelectorAll(".options")

// === FOR TESTING
// options.forEach(option => {
//     option.addEventListener("click", (e) => {
//         alert("clicked " + e.target.innerText)

//     })
// })


dropdown.addEventListener("click", (e) => {
    // alert("clicked")
    selectOptions.classList.toggle("hide-options")

    if (dropDownIcon.innerText === "▼") {
        dropDownIcon.innerText = "▲";
    } else {
        dropDownIcon.innerText = "▼";
    }
})
