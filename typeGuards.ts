interface Dog {
	bark: () => void;
}

interface Human {
	speak: () => void;
}

const isDog = (creature: Human | Dog): creature is Dog => {
	return "bark" in creature;
};

const isHuman = (creature: Human | Dog): creature is Human => {
	return "speak" in creature;
};

const makeNoice = (creature: Human | Dog) => {
	if (isDog(creature)) {
		creature.bark();
	}

	if (isHuman(creature)) {
		creature.speak();
	}
};

const dog: Dog = {
	bark: () => {
		console.log("bark bark");
	},
};

const human: Human = {
	speak: () => {
		console.log("speak speak");
	},
};

makeNoice(human);
makeNoice(dog);
