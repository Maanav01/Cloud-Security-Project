const calculateTemp = () => {
    const inputTemp = parseFloat(document.getElementById('temp').value);
    const tempSelected = document.getElementById('temp_diff');
    const selectedOption = temp_diff.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        return ((cel * 9 / 5) + 32).toFixed(1);
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        return ((fah - 32) * 5 / 9).toFixed(1);
    }

    // Kelvin to Celsius
    const kelToCel = (kel) => {
        return (kel - 273.15).toFixed(1);
    }

    // Celsius to Kelvin
    const celToKel = (cel) => {
        return (parseFloat(cel) + 273.15).toFixed(1);
    }

    // Fahrenheit to Kelvin
    const fahToKel = (fah) => {
        return ((parseFloat(fah) + 459.67) * 5 / 9).toFixed(1);
    }

    // Kelvin to Fahrenheit
    const kelToFah = (kel) => {
        return ((parseFloat(kel) * 9 / 5) - 459.67).toFixed(1);
    }

    // Rankine to Celsius
    const ranToCel = (ran) => {
        return ((parseFloat(ran) - 491.67) * 5 / 9).toFixed(1);
    }

    // Celsius to Rankine
    const celToRan = (cel) => {
        return (parseFloat(cel) * 9 / 5 + 491.67).toFixed(1);
    }

    // Rankine to Fahrenheit
    const ranToFah = (ran) => {
        return (parseFloat(ran) - 459.67).toFixed(1);
    }

    // Fahrenheit to Rankine
    const fahToRan = (fah) => {
        return (parseFloat(fah) + 459.67).toFixed(1);
    }

    // Newton to Celsius
    const newToCel = (newt) => {
        return (parseFloat(newt) * 100 / 33).toFixed(1);
    }

    // Celsius to Newton
    const celToNew = (cel) => {
        return (parseFloat(cel) * 33 / 100).toFixed(1);
    }

    // Rømer to Celsius
    const romToCel = (rom) => {
        return ((parseFloat(rom) - 7.5) * 40 / 21).toFixed(1);
    }

    // Celsius to Rømer
    const celToRom = (cel) => {
        return ((parseFloat(cel) * 21 / 40) + 7.5).toFixed(1);
    }

    // Réaumur to Celsius
    const reaToCel = (rea) => {
        return (parseFloat(rea) * 5 / 4).toFixed(1);
    }

    // Celsius to Réaumur
    const celToRea = (cel) => {
        return (parseFloat(cel) * 4 / 5).toFixed(1);
    }

    // Delisle to Celsius
    const delToCel = (del) => {
        return ((212 - parseFloat(del)) * 5 / 6).toFixed(1);
    }

    // Celsius to Delisle
    const celToDel = (cel) => {
        return ((212 - parseFloat(cel)) * 6 / 5).toFixed(1);
    }

    let result;
    switch (selectedOption) {
        case 'cel':
            result = celToFah(inputTemp) + "&#176; Fahrenheit";
            break;
        case 'fah':
            result = fahToCel(inputTemp) + "&#176; Celsius";
            break;
        case 'kel':
            result = kelToCel(inputTemp) + " Kelvin";
            break;
        case 'ran':
            result = ranToCel(inputTemp) + " Rankine";
            break;
        case 'new':
            result = newToCel(inputTemp) + " Newton";
            break;
        case 'rom':
            result = romToCel(inputTemp) + " Rømer";
            break;
        case 'rea':
            result = reaToCel(inputTemp) + " Réaumur";
            break;
        case 'del':
            result = delToCel(inputTemp) + " Delisle";
            break;
        default:
            result = "Invalid option";
    }

    document.getElementById("result").innerHTML = result;
}