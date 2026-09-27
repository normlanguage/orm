import assert from 'node:assert/strict';

const base = 'http://127.0.0.1:18775/sample/accounts';
const created = await fetch(`${base}/create`, {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({ username: 'alice' }),
});
assert.equal(created.status, 200);
const id = Number(await created.text());
assert.ok(Number.isSafeInteger(id) && id > 0);

const before = await fetch(`${base}/${id}`);
assert.equal(before.status, 200);
assert.equal(await before.text(), 'alice');

const updated = await fetch(`${base}/${id}/rename`, {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({ username: 'alice-2' }),
});
assert.equal(updated.status, 200);
assert.equal(await updated.text(), 'alice-2');

const after = await fetch(`${base}/${id}`);
assert.equal(after.status, 200);
assert.equal(await after.text(), 'alice-2');

const missingId = id + 1000000;
const missing = await fetch(`${base}/${missingId}`);
assert.equal(missing.status, 404);
const missingUpdate = await fetch(`${base}/${missingId}/rename`, {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({ username: 'nobody' }),
});
assert.equal(missingUpdate.status, 404);
console.log('created / alice / updated / alice-2');