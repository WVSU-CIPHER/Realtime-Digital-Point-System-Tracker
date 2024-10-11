
const allBatches = document.querySelectorAll(".curriculum aside section")


allBatches.forEach(batch => {
    batch.addEventListener("click", (e) => {
        // alert("clicked")
        batch.classList.add("selectedActive")
        batch.style.opacity = "1"; // Set opacity to 1 when selected

        // automatically remove styling if different batch is selected (navigated to diff batch)
        allBatches.forEach(otherBatch => {
            if (otherBatch !== batch) {
                otherBatch.classList.remove("selectedActive")
                otherBatch.style.opacity = "0.45"; // Reset opacity for non-selected batches
            }
        })
    })
})



// HARDCODED DROPDOWN
const dropdown = document.querySelector(".dropdown");
const selectOptions = document.querySelector(".selectOptions")
const dropDownIcon = document.querySelector(".dropdownIcon");

const options = document.querySelectorAll(".options")

// === FOR TESTING
// options.forEach(option => {
//     option.addEventListener("click", (e) => {
//         alert("clicked " + e.target.innerText)

//     })
// })


dropdown.addEventListener("click", (e) => {
    // alert("clicked")
    selectOptions.classList.toggle("hideOptions")

    if (dropDownIcon.innerText === "▼") {
        dropDownIcon.innerText = "▲";
    } else {
        dropDownIcon.innerText = "▼";
    }
})
