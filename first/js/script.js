//Vehicle start

//First
document.getElementById("button_1_dohavemultiplevehicles").addEventListener('click', () => {
    document.getElementById('dohavemultiplevehicles-sec').classList.add('m-hide', 'validated')
    document.getElementById('dohavemultiplevehicles-sec').classList.remove('active')
    document.getElementById('dohavemultipledrivers-sec').classList.remove('m-hide')
    document.getElementById('dohavemultipledrivers-sec').classList.add('active')
    document.getElementById('dohavemultipledrivers-sec').scrollIntoView()
})
document.getElementById("button_2_dohavemultiplevehicles").addEventListener('click', () => {
    document.getElementById('dohavemultiplevehicles-sec').classList.add('m-hide', 'validated')
    document.getElementById('dohavemultiplevehicles-sec').classList.remove('active')
    document.getElementById('dohavemultipledrivers-sec').classList.remove('m-hide')
    document.getElementById('dohavemultipledrivers-sec').classList.add('active')
    document.getElementById('dohavemultipledrivers-sec').scrollIntoView()
})



// Second
document.getElementById('button_1_dohavemultipledrivers').addEventListener('click', () => {
    document.getElementById('dohavemultipledrivers-sec').classList.add('m-hide', 'validated')
    document.getElementById('dohavemultipledrivers-sec').classList.remove('active')
    document.getElementById('selectvehicleyear-sec').classList.remove('m-hide')
    document.getElementById('selectvehicleyear-sec').classList.add('active')
    document.getElementById('selectvehicleyear-sec').scrollIntoView()
})
document.getElementById('button_2_dohavemultipledrivers').addEventListener('click', () => {
    document.getElementById('dohavemultipledrivers-sec').classList.add('m-hide', 'validated')
    document.getElementById('dohavemultipledrivers-sec').classList.remove('active')
    document.getElementById('selectvehicleyear-sec').classList.remove('m-hide')
    document.getElementById('selectvehicleyear-sec').classList.add('active')
    document.getElementById('selectvehicleyear-sec').scrollIntoView()
})


//Third
const selectVehicle = document.getElementById('SelectVehicleYear');
const vehicleMake = document.getElementById('VehicleMake');
const vehicleBaseModel = document.getElementById('VehicleBaseModel');

selectVehicle.addEventListener('change', () => {
    document.getElementById('selectvehicleyear-wrapper').classList.add('validated')
    selectVehicle.classList.add('removeBlueBorder', 'selected', 'validated', 'textFilled')
    document.getElementById('selectvehicleyear-wrapper').classList.remove('active')
    document.getElementById('vehiclemake-wrapper').classList.add('active')
})

vehicleMake.addEventListener('change', () => {
    document.getElementById('vehiclemake-wrapper').classList.add('validated')
    vehicleMake.classList.add('removeBlueBorder', 'selected', 'validated', 'textFilled')
    document.getElementById('vehiclemake-wrapper').classList.remove('active')
    document.getElementById('vehiclebasemodel-wrapper').classList.add('active')
})
vehicleBaseModel.addEventListener('change', () => {
    document.getElementById('vehiclebasemodel-wrapper').classList.add('validated')
    vehicleBaseModel.classList.add('removeBlueBorder', 'selected', 'validated', 'textFilled')
    document.getElementById('vehiclebasemodel-wrapper').classList.remove('active')
    document.getElementById('gender-section').classList.remove('hide')
    document.getElementById('gender-section').classList.add('fadeInRight')
    document.getElementById('dohavemultiplevehicles-section').classList.add('hide')
})

//Vehicle end

//Gender start
//First
const male = document.getElementById('button_1_gender');
const feMale = document.getElementById('button_2_gender');
const noBinary = document.getElementById('button_3_gender');

const genderButtons = [male, feMale, noBinary]
genderButtons.map(button => {
    button.addEventListener('click', () => {
        document.getElementById('gender-sec').classList.remove('active')
        document.getElementById('gender-sec').classList.add('validated', 'm-hide')
        document.getElementById('gender-wrapper').classList.add('validated')
        document.getElementById('gender-wrapper').classList.remove('active')

        document.getElementById('ownhome-sec').classList.remove('m-hide')
        document.getElementById('ownhome-sec').classList.add('active')
        document.getElementById('ownhome-sec').scrollIntoView()
    })
})

//Second
const ownYes = document.getElementById('button_1_ownhome');
const ownNo = document.getElementById('button_2_ownhome');
const ownHomeButtons = [ownYes, ownNo];
ownHomeButtons.map(button => {
    button.addEventListener('click', () => {
        document.getElementById('ownhome-sec').classList.remove('active')
        document.getElementById('ownhome-sec').classList.add('validated', 'm-hide')
        document.getElementById('ownhome-wrapper').classList.add('validated')
        document.getElementById('ownhome-wrapper').classList.remove('active')

        document.getElementById('maritalstatus-sec').classList.remove('m-hide')
        document.getElementById('maritalstatus-sec').classList.add('active')
        document.getElementById('maritalstatus-sec').scrollIntoView()
    })
})

//Third
const marriedYes = document.getElementById('button_1_maritalstatus');
const marriedNo = document.getElementById('button_2_maritalstatus');
const marriedStatusButtons = [marriedYes, marriedNo];

marriedStatusButtons.map(button => {
    button.addEventListener('click', () => {
        document.getElementById('maritalstatus-sec').classList.remove('active')
        document.getElementById('maritalstatus-sec').classList.add('validated', 'm-hide')
        document.getElementById('maritalstatus-wrapper').classList.add('validated')
        document.getElementById('maritalstatus-wrapper').classList.remove('active')

        document.getElementById('birthmonth-sec').classList.remove('m-hide')
        document.getElementById('birthmonth-sec').classList.add('active')
        document.getElementById('birthmonth-sec').scrollIntoView()
    })
})

//Fourth
const birthMonth = document.getElementById('BirthMonth');
const birthDay = document.getElementById('BirthDay');
const birthYear = document.getElementById('BirthYear');

const birthMonthInputs = [birthMonth, birthDay, birthYear];

birthMonthInputs.map(input => {
    input.addEventListener('change', () => {
        if(!!input.value){
            document.getElementById('birthmonth-sec').classList.remove('active')
            document.getElementById('birthmonth-sec').classList.add('validated', 'm-hide')
            document.getElementById('birthmonth-wrapper').classList.add('validated')
            document.getElementById('birthmonth-wrapper').classList.remove('active')

            document.getElementById('licensestatus-sec').classList.remove('m-hide')
            document.getElementById('licensestatus-sec').classList.add('active')
        }
    })
    input.addEventListener('blur', () => {
        document.getElementById('licensestatus-sec').scrollIntoView()
    })
})

//Fifth
const licenseYes = document.getElementById('button_1_licensestatus');
const licenseNo = document.getElementById('button_2_licensestatus');

const licenseButtons = [licenseYes, licenseNo];

licenseButtons.map(button => {
    button.addEventListener('click', () => {
        document.getElementById('licensestatus-sec').classList.remove('active')
        document.getElementById('licensestatus-sec').classList.add('validated', 'm-hide')
        document.getElementById('licensestatus-wrapper').classList.add('validated')
        document.getElementById('licensestatus-wrapper').classList.remove('active')

        document.getElementById('anyrecentincidents-sec').classList.remove('m-hide')
        document.getElementById('anyrecentincidents-sec').classList.add('active')
        document.getElementById('anyrecentincidents-sec').scrollIntoView()
    })
})

//Sixth
const anyrecYes = document.getElementById('button_1_anyrecentincidents');
const anyrecNo = document.getElementById('button_2_anyrecentincidents');

const anyrecButtons = [anyrecYes, anyrecNo];

anyrecButtons.map(button => {
    button.addEventListener('click', () => {
        document.getElementById('anyrecentincidents-sec').classList.remove('active')
        document.getElementById('anyrecentincidents-sec').classList.add('validated', 'm-hide')
        document.getElementById('anyrecentincidents-wrapper').classList.add('validated')
        document.getElementById('anyrecentincidents-wrapper').classList.remove('active')

        document.getElementById('numberofincidents-sec').classList.remove('hide')
        document.getElementById('numberofincidents-sec').classList.add('active')
        document.getElementById('numberofincidents-sec').scrollIntoView()
    })
})

document.getElementById('NumberOfIncidents').addEventListener('change', () => {
    document.getElementById('numberofincidents-sec').classList.remove('active')
    document.getElementById('numberofincidents-sec').classList.add('validated', 'm-hide')
    document.getElementById('numberofincidents-wrapper').classList.add('validated')
    document.getElementById('numberofincidents-wrapper').classList.remove('active')

    document.getElementById('dui-sec').classList.remove('hide')
    document.getElementById('dui-sec').classList.add('active')
    document.getElementById('dui-sec').scrollIntoView()
})

const duiYes = document.getElementById('button_1_dui')
const duiNo = document.getElementById('button_2_dui')

const duiButtons = [duiYes, duiNo]
duiButtons.map(button => {
    button.addEventListener('click', () => {
        document.getElementById('dui-sec').classList.remove('active')
        document.getElementById('dui-sec').classList.add('validated', 'm-hide')
        document.getElementById('dui-wrapper').classList.add('validated')
        document.getElementById('dui-wrapper').classList.remove('active')

        document.getElementById('doesrequiresr22-sec').classList.remove('hide')
        document.getElementById('doesrequiresr22-sec').classList.add('active')
        document.getElementById('doesrequiresr22-sec').scrollIntoView()
    })
})

const sr22Yes = document.getElementById('button_1_doesrequiresr22')
const sr22No = document.getElementById('button_2_doesrequiresr22')
const sr22Buttons = [sr22Yes, sr22No]
sr22Buttons.map(button => {
    button.addEventListener('click', () => {
        document.getElementById('doesrequiresr22-sec').classList.remove('active')
        document.getElementById('doesrequiresr22-sec').classList.add('validated', 'm-hide')
        document.getElementById('doesrequiresr22-wrapper').classList.add('validated')
        document.getElementById('doesrequiresr22-wrapper').classList.remove('active')

        document.getElementById('military_status-sec').classList.remove('hide')
        document.getElementById('military_status-sec').classList.add('active')
        document.getElementById('military_status-sec').scrollIntoView()
    })
})



//Seventh
const discountYes = document.getElementById('button_1_military_status');
const discountNo = document.getElementById('button_2_military_status');

const discountButton = [discountYes, discountNo];

discountButton.map(button => {
    button.addEventListener('click', () => {
        document.getElementById('military_status-sec').classList.remove('active')
        document.getElementById('military_status-sec').classList.add('validated', 'm-hide')
        document.getElementById('military_status-wrapper').classList.add('validated')
        document.getElementById('military_status-wrapper').classList.remove('active')

        document.getElementById('insurancecarrier-sec').classList.remove('hide')
        document.getElementById('insurancecarrier-sec').classList.add('active')
        document.getElementById('insurancecarrier-sec').scrollIntoView()
    })
})

const insuranceModel = document.getElementById('InsuranceCarrier')
insuranceModel.addEventListener('change', () => {
    document.getElementById('insurancecarrier-wrapper').classList.add('validated')
    insuranceModel.classList.add('removeBlueBorder', 'selected', 'validated', 'textFilled')
    document.getElementById('insurancecarrier-wrapper').classList.remove('active')
    document.getElementById('firstname-section').classList.remove('hide')
    document.getElementById('firstname-section').classList.add('fadeInRight')
    document.getElementById('gender-section').classList.add('hide')
    document.getElementById('firstname-section').scrollIntoView()
})

const firstName = document.getElementById('FirstName');
const lastName = document.getElementById('LastName');
const email = document.getElementById('EmailAddress');

const contactInfo = [firstName, lastName, email]
contactInfo.map(input => {
    input.addEventListener('change', () => {
        input.classList.add('textFilled')
        document.getElementById('firstname_next').disabled = false
    })
})

document.getElementById('firstname_next').addEventListener('click', () => {
    document.getElementById('firstname_next').remove('hide')
    document.getElementById('firstname-section').add('hide')
})

//last-step

const ourAddress = document.getElementById('Address')
const phoneNumber = document.getElementById('PhoneNumber')

const last =  [ourAddress, phoneNumber]

last.map(input => {
    input.addEventListener('change', () => {
        document.getElementById('phonenumber_next').disabled=false
        document.getElementById('phonenumber_next').classList.remove()
    })
})
