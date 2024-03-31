import Calculator from "./Main";

export default class ExtendedsTests extends Calculator {
	public get getRufinhoDevice() {
		return this.ruffiniDevice;
	}

	public get getSum() {
		return this.sum;
	}

	public get getSub() {
		return this.sub;
	}

	public get getMul() {
		return this.mul;
	}

	public get getDiv() {
		return this.div;
	}

	public get getMod() {
		return this.mod;
	}

	public get getPower() {
		return this.power;
	}
}
