var q1 = "我本能忍受黑暗，如果不曾见过光。"
var a1 = "AWM绝地求生"
var q2 = "我们在看悬疑小说的时候，都是跟随主角所怀疑的所有可能作案的对象，但为什么我们从未怀疑过主角呢？"
var a2 = "破云"
var q3 = "人活一辈子，又不是为了别人的嘴活的。"
var a3 = "可爱过敏原"
var q4 = "那么浅的胸口，那么深的心。"
var a4 = "默读"
var q5 = "不是衣香鬓影，有时就显不出形单影只。"
var a5 = "镇魂"
var q6 = "只有玫瑰与你相称"
var a6 = "我只喜欢你的人设"
var q7 = "既然喜欢，就别放弃。"
var a7 = "这题超纲了"
var q8 = "其中失与得，苦与乐，百般滋味，如人饮水。"
var a8 = "影帝"
var q9 = "我从未如此爱过任何人，一如我爱你。"
var a9 = "破云"
var q10 = "是我遇到你的那天。"
var a10 = "默读"
var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
var answers = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10]
var score = 0
var wrong = ""

function test() {
    var music = document.getElementById("audio")
    music.play()
    alert("请回答下列句子出自于什么书（回答全名）共" + questions.length + "题")
    for (var i = 0; i <= questions.length - 1; i++) {
        var your_answer = prompt(i + 1 + "." + "   " + questions[i])
        if (your_answer.indexOf(answers[i]) != -1 || answers[i].indexOf(your_answer)) {
            score += 100 / questions.length
        } else {
            wrong += (i + 1 + "." + "  " + "\"" + questions[i] + "\"" + "   " + ":" + "   " + "《" + answers[i] + "》" + "\n")
        }
    }
    alert("你的分数为" + score + "分")
    if (wrong.length > 0) {

        alert("错误的是下列题目： " + "\n" + wrong)
    }
}