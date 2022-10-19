let progressFilledwidth = document.querySelector('.progress-filled');
let progressPercentage = document.querySelector('.progress-percentage');
let previousButton = document.getElementById('backButton');
let previousQuestion = document.getElementById('previous_question');


//steps
let zipcodeStep = document.getElementById('zipcode-step')
let yearStep = document.getElementById('year-step')
let makeStep = document.getElementById('make-step')
let modelStep = document.getElementById('model-step')
let trimStep = document.getElementById('trim-step')
let secondVehicleStep = document.getElementById('second-vehicle-step')
let currentlyinsuredStep = document.getElementById('currentlyinsured-step')
let currentCarrierStep = document.getElementById('current-carrier-step')
let tenureshipStep = document.getElementById('tenureship-step')
let genderStep = document.getElementById('gender-step')
let marriedStep = document.getElementById('married-step')
let educationStep = document.getElementById('education-step')
let employmentStep = document.getElementById('employment-step')
let homeownerStep = document.getElementById('homeowner-step')
let incidentsStep = document.getElementById('incidents-step')
let militaryexperienceStep = document.getElementById('militaryexperience-step')
let birthdateStep = document.getElementById('birthdate-step')
let multiTextStep = document.getElementById('multiText-step')
let lastStep = document.getElementById('last-step')

document.getElementById('check').addEventListener('click', () => {
    zipcodeStep.classList.add('none');
    yearStep.classList.remove('none');
    progressFilledwidth.style.width = '6%';
    progressPercentage.innerHTML = '6% Complete';
    previousButton.style.display = 'block';
    previousQuestion.style.display = 'block';
})

let yearList = document.getElementById('year_0').querySelectorAll('li');
for (const year of yearList) {
    year.addEventListener('click', () => {
        yearStep.classList.add('none');
        makeStep.classList.remove('none');
        progressFilledwidth.style.width = '9%';
        progressPercentage.innerHTML = '9% Complete';
    })
}

let makeList = document.getElementById('make').querySelectorAll('li');
for (const make of makeList) {
    make.addEventListener('click', () => {
        makeStep.classList.add('none');
        modelStep.classList.remove('none');
        progressFilledwidth.style.width = '12%';
        progressPercentage.innerHTML = '12% Complete';
    })
}

let modelList = document.getElementById('model').querySelectorAll('li')
for (const model of modelList) {
    model.addEventListener('click', () => {
        modelStep.classList.add('none');
        trimStep.classList.remove('none');
        progressFilledwidth.style.width = '15%';
        progressPercentage.innerHTML = '15% Complete';
    })
}

let trimList = document.getElementById('submodel_0').querySelectorAll('li')
for (const trim of trimList) {
    trim.addEventListener('click', () => {
        trimStep.classList.add('none');
        secondVehicleStep.classList.remove('none');
        progressFilledwidth.style.width = '21%';
        progressPercentage.innerHTML = '21% Complete';
    })
}


//secondCarHasOrNo
let isSecondList = document.getElementById('secondVehicle').querySelectorAll('li')
for (const list of isSecondList) {
    list.addEventListener('click', () => {
        secondVehicleStep.classList.add('none');
        currentlyinsuredStep.classList.remove('none');
        progressFilledwidth.style.width = '36%';
        progressPercentage.innerHTML = '36% Complete';
    })
}

const insuranceYes = document.getElementById('currentlyinsured_yes')
const insuranceNO = document.getElementById('currentlyinsured_no')

insuranceYes.addEventListener('click', () => {
    currentlyinsuredStep.classList.add('none');
    currentCarrierStep.classList.remove('none');
    progressFilledwidth.style.width = '39%';
    progressPercentage.innerHTML = '39% Complete';
})
insuranceNO.addEventListener('click', () => {
    currentlyinsuredStep.classList.add('none');
    genderStep.classList.remove('none');
    progressFilledwidth.style.width = '45%';
    progressPercentage.innerHTML = '45% Complete';
})

let currentList = document.getElementById('current_carrier').querySelectorAll('li')
for (const list of currentList) {
    list.addEventListener('click', () => {
        currentCarrierStep.classList.add('none');
        tenureshipStep.classList.remove('none');
        progressFilledwidth.style.width = '42%';
        progressPercentage.innerHTML = '42% Complete';
    })
}

let tunershipList = document.getElementById('tenureship').querySelectorAll('li')
for (const list of tunershipList) {
    list.addEventListener('click', () => {
        tenureshipStep.classList.add('none');
        genderStep.classList.remove('none');
        progressFilledwidth.style.width = '45%';
        progressPercentage.innerHTML = '45% Complete';
    })
}

let genderList = document.getElementById('gender').querySelectorAll('li')
for (const list of genderList) {
    list.addEventListener('click', () => {
        genderStep.classList.add('none');
        marriedStep.classList.remove('none');
        progressFilledwidth.style.width = '48%';
        progressPercentage.innerHTML = '48% Complete';
    })
}

let marriedList = document.getElementById('gender').querySelectorAll('li')
for (const list of marriedList) {
    list.addEventListener('click', () => {
        marriedStep.classList.add('none');
        educationStep.classList.remove('none');
        progressFilledwidth.style.width = '55%';
        progressPercentage.innerHTML = '55% Complete';
    })
}

let educationList = document.getElementById('education-level').querySelectorAll('li')
for (const list of educationList) {
    list.addEventListener('click', () => {
        educationStep.classList.add('none');
        employmentStep.classList.remove('none');
        progressFilledwidth.style.width = '59%';
        progressPercentage.innerHTML = '59% Complete';
    })
}

let employmentList = document.getElementById('employment-status').querySelectorAll('li')
for (const list of employmentList) {
    list.addEventListener('click', () => {
        employmentStep.classList.add('none');
        homeownerStep.classList.remove('none');
        progressFilledwidth.style.width = '67%';
        progressPercentage.innerHTML = '67% Complete';
    })
}

let homeownerList = document.getElementById('homeowner-test').querySelectorAll('li')
for (const list of homeownerList) {
    list.addEventListener('click', () => {
        homeownerStep.classList.add('none');
        incidentsStep.classList.remove('none');
        progressFilledwidth.style.width = '80%';
        progressPercentage.innerHTML = '80% Complete';
    })
}

document.getElementById('continue_btn').addEventListener('click', () => {
    incidentsStep.classList.add('none');
    militaryexperienceStep.classList.remove('none');
    progressFilledwidth.style.width = '85%';
    progressPercentage.innerHTML = '85% Complete';
})

let militaryexperienceList = document.getElementById('militaryexperience').querySelectorAll('li')
for (const list of militaryexperienceList) {
    list.addEventListener('click', () => {
        militaryexperienceStep.classList.add('none');
        birthdateStep.classList.remove('none');
        progressFilledwidth.style.width = '88%';
        progressPercentage.innerHTML = '88% Complete';
    })
}

document.getElementById('continue_btn2').addEventListener('click', () => {
    birthdateStep.classList.add('none');
    multiTextStep.classList.remove('none');
    progressFilledwidth.style.width = '93%';
    progressPercentage.innerHTML = '93% Complete';
})

document.getElementById('continue_btn3').addEventListener('click', () => {
    multiTextStep.classList.add('none');
    lastStep.classList.remove('none');
    progressFilledwidth.style.width = '98%';
    progressPercentage.innerHTML = '98% Complete';
})
