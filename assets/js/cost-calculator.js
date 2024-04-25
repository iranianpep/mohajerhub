function calculateAndSetTotalCost()
{
    const formCostRanges = document.getElementsByClassName('form-range cost-range');
    const formCostRangesArray = Array.from(formCostRanges);

    let total = 0;
    formCostRangesArray.forEach(costRange => {
        if (!costRange.disabled) {
            total += parseInt(costRange.value);
        }
    });

    document.getElementById('total-cost-display').innerHTML = toPersianNum((total).toString());
}

function updateTotalCost(rangeField, displayAreaId)
{
    document.getElementById(displayAreaId).innerHTML = toPersianNum((rangeField.value).toString());

    calculateAndSetTotalCost();
}

function updateMainCost(rangeField, mainCostKey, displayAreaId)
{
    const className = 'form-range cost-sub-range-' + mainCostKey;
    const formCostRanges = document.getElementsByClassName(className);
    const formCostRangesArray = Array.from(formCostRanges);

    let total = 0;
    formCostRangesArray.forEach(costRange => {
        total += parseInt(costRange.value);
    });

    changeElementValue('cost-field-' + mainCostKey, total);

    document.getElementById(displayAreaId).innerHTML = toPersianNum((rangeField.value).toString());
}

function handleSwitch(field, costKey)
{
    const containerElement = document.getElementById('cost-range-container-' + costKey);
    const totalElement = document.getElementById('cost-total-' + costKey);
    const inputsInContainerElements = Array.from(containerElement.getElementsByTagName('input'));

    if (field.checked) {
        containerElement.style.opacity = '1';
        totalElement.style.opacity = '1';

        inputsInContainerElements.forEach(element => {
            element.disabled = false;
        });
    } else {
        containerElement.style.opacity = '0.5';
        totalElement.style.opacity = '0.5';

        inputsInContainerElements.forEach(element => {
            element.disabled = true;
        });
    }

    calculateAndSetTotalCost();
}

function changeElementValue(id, value) {
    const element = document.getElementById(id)
    element.value = value;
    const event = new Event('change');
    element.dispatchEvent(event);
}