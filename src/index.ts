import readline from 'readline';
import { buyLottos, calcInterest, drawLotto } from './lotto';


const main =  () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question("구입 금액을 입력해 주세요.\n", (ans => {
    const money = parseInt(ans, 10);
    const tickets = buyLottos(money);
    console.log(tickets);
    console.log(`총 수익률은 ${calcInterest(tickets, drawLotto())}입니다.`)
    process.exit();
  }));
}

main();
