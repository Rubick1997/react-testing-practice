import React from "react";
import Counter from "../Counter";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
	const component = render(<Counter />);
	getByTestId = component.getByTestId;
});

afterEach(() => {
	cleanup();
});

test("header renders with correct text", () => {
	const headerEl = getByTestId("header");
	expect(headerEl.textContent).toBe("My Counter");
});

test("initial value of counter is 0", () => {
	const counterEl = getByTestId("counter");

	expect(counterEl.textContent).toBe("0");
});

test("input contains initial value of 1", () => {
	const inputEl = getByTestId("input");

	expect(inputEl.value).toBe("1");
});

test("add button renders with +", () => {
	const addBtn = getByTestId("add-btn");

	expect(addBtn.textContent).toBe("+");
});

test("subtract button renders with -", () => {
	const subtractBtn = getByTestId("subtract-btn");

	expect(subtractBtn.textContent).toBe("-");
});

test("changing value of input works correctly", () => {
	const inputEl = getByTestId("input");
	fireEvent.change(inputEl, {
		target: {
			value: "5",
		},
	});

	expect(inputEl.value).toBe("5");
});

test("clicking on plus button adds one to counter", () => {
	const addBtn = getByTestId("add-btn");
	const counterEl = getByTestId("counter");
	expect(counterEl.textContent).toBe("0");
	fireEvent.click(addBtn);
	expect(counterEl.textContent).toBe("1");
});

test("clicking on subtract button subtracts one from the counter", () => {
	const subtractBtn = getByTestId("subtract-btn");
	const counterEl = getByTestId("counter");
	expect(counterEl.textContent).toBe("0");
	fireEvent.click(subtractBtn);
	expect(counterEl.textContent).toBe("-1");
});

test("changing input value and clicking on add btn works correctly", () => {
	const addBtn = getByTestId("add-btn");
	const counterEl = getByTestId("counter");
	const inputEl = getByTestId("input");

	fireEvent.change(inputEl, {
		target: {
			value: "5",
		},
	});
	fireEvent.click(addBtn);
	expect(counterEl.textContent).toBe("5");
});

test("changing input value and clicking on subtract btn works correctly", () => {
	const subtractBtn = getByTestId("subtract-btn");
	const counterEl = getByTestId("counter");
	const inputEl = getByTestId("input");

	fireEvent.change(inputEl, {
		target: {
			value: "5",
		},
	});
	fireEvent.click(subtractBtn);
	expect(counterEl.textContent).toBe("-5");
});

test("adding and the subtrcting leads to correct number", () => {
	const subtractBtn = getByTestId("subtract-btn");
	const addBtn = getByTestId("add-btn");
	const counterEl = getByTestId("counter");
	const inputEl = getByTestId("input");

	fireEvent.change(inputEl, {
		target: {
			value: "10",
		},
	});

	fireEvent.click(addBtn);
	fireEvent.click(addBtn);
	fireEvent.click(addBtn);
	fireEvent.click(addBtn);
	fireEvent.click(subtractBtn);
	fireEvent.click(subtractBtn);
	expect(counterEl.textContent).toBe("20");

	fireEvent.change(inputEl, {
		target: {
			value: "5",
		},
	});
	fireEvent.click(addBtn);
	fireEvent.click(subtractBtn);
	fireEvent.click(subtractBtn);

	expect(counterEl.textContent).toBe("15");
});

test("counter contains correct className", () => {
	const counterEl = getByTestId("counter");
	const inputEl = getByTestId("input");
	const subtractBtn = getByTestId("subtract-btn");
	const addBtn = getByTestId("add-btn");

	expect(counterEl.className).toBe("");

	fireEvent.change(inputEl, {
		target: {
			value: "50",
		},
	});

	fireEvent.click(addBtn);
	expect(counterEl.className).toBe("");
	fireEvent.click(addBtn);
	expect(counterEl.className).toBe("green");
	fireEvent.click(addBtn);
	expect(counterEl.className).toBe("green");
	fireEvent.click(subtractBtn);
	fireEvent.click(subtractBtn);
	expect(counterEl.className).toBe("");
	fireEvent.click(subtractBtn);
	fireEvent.click(subtractBtn);
	fireEvent.click(subtractBtn);
	fireEvent.click(subtractBtn);
	expect(counterEl.className).toBe("red");
});
