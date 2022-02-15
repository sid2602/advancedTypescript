function pickObjectKey<T, K extends keyof T>(obj: T, keys: K[]) {
	let newObj = {};
	for (const key of keys) {
		if (key in obj) {
			newObj = {
				...newObj,
				[key]: obj[key],
			};
		}
	}

	return newObj;
}

const language = {
	name: "Java script",
	age: 25,
	extensions: ["js", "jsx"],
};

const obj = pickObjectKey(language, ["name", "extensions"]);

console.log(obj);

type User = {
	name: string;
	age: number;
};

const getUser = async <T>(): Promise<T> => {
	const response = await fetch("https://example.com/api");
	return response.json();
};

const data = getUser<User>().then((data) => {
	data.age, data.name;
});
