export class CalorieCalculator {
    #sex;
    #coefficients;
    #growth;
    #weight;
    #age;
    #activity;

    constructor({sex = null, growth = null, weight = null, age = null, activity = null}) {
        this.setSex(sex);
        this.setGrowth(growth);
        this.setWeight(weight);
        this.setAge(age);
        this.setActivity(activity);
    }

    setSex(sex) {
        this.#sex = sex;
        if (this.#sex == 'male') {
            this.#coefficients = [88.36, 13.4, 4.8, 5.7];
        } 
        if (this.#sex == 'female') {
            this.#coefficients = [447.6, 9.2, 3.1, 4.3];
        }

        return this;
    }

    setGrowth(growth) {
        if (typeof growth === 'number' && growth > 0 && growth < 500) {
            this.#growth = growth;
            return this;
        }

        throw new Error(`Invalid value of growth: ${growth}`);
    }

    setWeight(weight) {
        if (typeof weight === 'number' && weight > 0 && weight < 300) {
            this.#weight = weight;
            return this;
        }

        throw new Error(`Invalid value of weight: ${weight}`);
    }

    setAge(age) {
        if (typeof age === 'number' && age > 0 && age < 150) {
            this.#age = age;
            return this;
        }

        throw new Error(`Invalid value of age: ${age}`);
    }

    setActivity(activity) {
        const plan = {
            low: 1.2,
            small: 1.375,
            medium: 1.55,
            high: 1.7
        };

        this.#activity = plan[activity];

        return this;
    }

    calculate() {
        if (this.validate()) {
            return this.#calculateBMR();
        }

        throw new Error(`There are some items not initialized`);
    }

    validate() {
        if (!this.#sex || 
            !this.#growth ||
            !this.#weight ||
            !this.#age ||
            !this.#activity) {
                return false;
            }
    
        return true;
    }

    #calculateBMR() {
        const [cMain, cWeight, cGrowth, cAge] = this.#coefficients;
     
        return (
            cMain + 
            (cWeight * this.#weight) +
            (cGrowth * this.#growth) - 
            (cAge * this.#age)
        ) * this.#activity;
    }
}