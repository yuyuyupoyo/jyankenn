let hands = ['グー', 'チョキ', 'パー'];
let com_hands;

function judge(p_hands) {
    com_hands = Math.floor(Math.random() * 3);

    let result_text;
    if (p_hands === com_hands){ result_text = "引き分け"}
    else if (p_hands === 0 && com_hands === 1) {result_text = "あなたの勝ち"}
    else if (p_hands === 1 && com_hands === 2) {result_text = "あなたの勝ち"}
    else if (p_hands === 2 && com_hands === 0) {result_text = "あなたの勝ち"}
    else {result_text = "コンピューターの勝ち"}

    document.getElementById("com").textContent = hands[com_hands];
    document.getElementById("me").textContent = hands[p_hands];
    document.getElementById("result").textContent = result_text;
}
/*
p_handsは仮引数。プレイヤーが選択した手。comはランダムに選択する。
if文でプレイヤーとcomの手を比較して結果を場合分け。
結果は勝ち、負け、引き分けの３つ。そのうち２つを述べればもう一つは自動的に決まる。

 document.getElementById("com").textContent = hands[com_hands];
 document.getElementById("me").textContent = hands[p_hands];の部分について。
 com_handsやp_handsは０、１、２の値を取り、handsよりグーチョキパーが当てはめられる。
 これらがプレイヤーとcomが選択した手として値を持つ。
 また、
 */