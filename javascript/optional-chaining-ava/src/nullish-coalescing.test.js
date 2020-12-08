import test from "ava";

test("Nullish coalescing defaults null", (t) => {
  t.is(null ?? "default", "default");
});

test("Nullish coalescing defaults undefined", (t) => {
  t.is(undefined ?? "default", "default");
});

test("Nullish coalescing defaults void 0", (t) => {
  t.is(void 0 ?? "default", "default");
});

test("Nullish coalescing does not default 0", (t) => {
  t.is(0 ?? "default", 0);
});

test("Nullish coalescing does not default empty string", (t) => {
  t.is("" ?? "default", "");
});

test("Nullish coalescing does not default false", (t) => {
  t.is(false ?? "default", false);
});
