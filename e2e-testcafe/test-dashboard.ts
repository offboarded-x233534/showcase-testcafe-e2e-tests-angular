import { Selector, ClientFunction } from 'testcafe';
import * as express from 'express';

fixture('Dashboard')
  .page(`http://127.0.0.1:3000/`)
  .before(async t => {
    const app = express();
    app.use(express.static('dist'));
    app.listen(3000, function () {
      console.log('showcase started on port 3000!');
    });
  });


test('should be possible to get async amount of notifications', async t => {
  const getLocation = ClientFunction(() => document.location.href);
  await t
    .expect(Selector('#nav').exists).ok()
    .click(Selector('#nav-link-dashboard'))
    .expect(getLocation()).contains('http://127.0.0.1:3000/#/dashboard')
    .expect(Selector('#amount-of-notifications').exists).ok()
    .expect(Selector('#amount-of-notifications').innerText).contains(200);
});
