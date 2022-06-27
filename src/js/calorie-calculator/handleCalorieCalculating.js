import { CalorieCalculator } from './CalorieCalculator';

export function handleCalorieCalculating() {
    
    init();
    listenChoseButtons();
    listenChoseInputs();
}

function init() {
    document.querySelector('.calculating__result span').innerHTML = '___';

    const sex = localStorage.getItem('sex');
    const activity = localStorage.getItem('activity');

    if (sex) {
        document.querySelectorAll('#sex div').forEach(item => {
            item.classList.remove('calculating__choose-item_active');
            document.querySelector(`#${sex}`).classList.add('calculating__choose-item_active');
        });   
    }

    if (activity) {
        document.querySelectorAll('#activity div').forEach(item => {
            item.classList.remove('calculating__choose-item_active');
            document.querySelector(`#${activity}`).classList.add('calculating__choose-item_active');
        });   
    }
}

function listenChoseButtons() {
    document.querySelectorAll('.calculating__choose').forEach(el => {
        el.addEventListener('click', e => {
            if (e.target.classList.contains('calculating__choose-item') && e.target.tagName != 'INPUT') {
                el.querySelectorAll('.calculating__choose-item').forEach(item => {
                    item.classList.remove('calculating__choose-item_active');
                });

                e.target.classList.add('calculating__choose-item_active');
                calculateResult();
            }
        });
    });
}

function listenChoseInputs() {
    document.querySelectorAll('input.calculating__choose-item').forEach(el => {
        el.addEventListener('input', e => {
            calculateResult();
        });
    });
}

function calculateResult() {
    const container = document.querySelector('.calculating__field');
    const sex = container.querySelector('#sex .calculating__choose-item_active').id;
    const activity = container.querySelector('#activity .calculating__choose-item_active').id;
    const growth = +container.querySelector('#growth').value;
    const weight = +container.querySelector('#weight').value;
    const age = +container.querySelector('#age').value;

    const resultEl = container.querySelector('.calculating__result span');
    
    if (
        !growth  || 
        !weight ||  
        !age
    ) {
        console.log('Not valid');
        resultEl.innerHTML = '____';
        return;
    }

    let result = null;

    try {
        result =  new CalorieCalculator({
            sex: sex,
            activity: activity,
            growth: growth,
            weight: weight,
            age: age
        }).calculate();
    } catch (e) {
        resultEl.innerHTML = '____';
        console.error(e);
        return;
    }


    resultEl.innerHTML = Math.floor(result);

    localStorage.setItem('sex', sex);
    localStorage.setItem('activity', activity);
}