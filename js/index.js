
function viewSummary1() {
  window.alert(" Twelve-year-old Sophie Foster has a secret. She's a Telepath--someone who can read minds. It's a talent she's never known how to explain.Everything changes the day she meets Fitz, a mysterious (and adorable) boy who appears out of nowhere, and who can also read minds like her. She discovers there's somewhere she does belong, and that staying with her family will put her in grave danger. In the blink of an eye. Sophie is forced to leave behind everything and start a new life in a place that is vastly different from what she has ever known.Sophie has new rules to learn and new skills to master, and not everyone is thrilled that she has come home. There are secrets buried deep in Sophie's memory--secrets about who she really is and why she was hidden among humans--that other people desperately want. The truth could mean life or death--and time is running out.")
}
function viewSummary2() {
  window.alert("Sophie Foster thought she was safe. Settled into her home at Havenfield, surrounded by friends, and using her unique telepathic abilities to train Silveny--the first female alicorn ever seen in the Lost Cities--her life finally seems to be coming together. But Sophie's kidnappers are still out there. And when Sophie discovers new messages and clues from the mysterious Black Swan group, she’s forced to take a terrifying risk—one that puts everyone in incredible danger. As long buried secrets rise to the surface, it’s once again up to Sophie to uncover hidden memories—before someone close to her is lost forever.In this second book in the New York Times and USA Today bestselling Keeper of the Lost Cities series, Sophie must journey to the darkest corners of her luminous world in a sequel that will leave you breathless for more.")
}
function viewSummary3() {
window.alert("Sophie Foster is ready to fight back.Her talents are getting stronger, and with the elusive Black Swan group ignoring her calls for help, she’s determined to find her kidnappers—before they come after her again.But a daring mistake leaves her world teetering on the edge of war, and causes many to fear that she has finally gone too far. And the deeper Sophie searches, the farther the conspiracy stretches, proving that her most dangerous enemy might be closer than she realizes. In this nail-biting third book in the New York Times and USA Today bestselling Keeper of the Lost Cities series, Sophie must fight the flames of rebellion, before they destroy everyone and everything she loves.")
}
function viewSummary4(){
  window.alert("Sophie Foster is on the run—but at least she's not alone.Her closest friends from the Lost Cities have gone with her to join the Black Swan. They still have doubts about the shadowy organization, but the only way to find answers is to start working with them. And as they settle into their new lives, they uncover secrets bigger than anything they’d imagined.But their enemies are far from done, and unleash a terrifying plague that threatens the safety of an entire species. Sophie and her friends fight with everything they have—with new allies joining them—but every choice has consequences. And trusting the wrong person could prove deadly.In this game-changing fourth book in the New York Times and USA Today bestselling Keeper of the Lost Cities series, Sophie must question everything to find a truth that will either save her world—or shatter it.")
}
function viewSummary5() {
  window.alert("Sophie Foster is back in the Lost Cities--but the Lost Cities have changed. The threat of war hangs heavy over her glittering world, and the Neverseen are wreaking havoc. The lines between friend and enemy have blurred, and Sophie is unsure whom to trust. But when she's warned that the people she loves most will be the next victims, she knows she has to act. A mysterious symbol could be the key--if only she knew how to translate it. Every new clue seems to lead deeper into her world's underbelly and the Black Swan aren't the only ones who have plans. The Neverseen have their own Initiative, and if Sophie doesn't stop it, they might finally have the ultimate means to control her.")
}
function viewSummary6() {
  window.alert("Sophie Foster is struggling. Grieving. Scrambling. But she knows one thing: she will not be defeated.The Neverseen have had their victories—but the battle is far from over. It’s time to change tactics. Make sacrifices. Re-examine everything. Maybe even time for Sophie to trust her enemies.All paths lead to Nightfall—an ominous door to an even more ominous place—and Sophie and her friends strike a dangerous bargain to get there. But nothing can prepare them for what they discover. The problems they’re facing stretch deep into their history. And with time running out, and mistakes catching up with them, Sophie and her allies must join forces in ways they never have before.In this spectacular sixth book in the New York Times and USA TODAY bestselling Keeper of the Lost Cities series, Sophie must uncover the truth about the Lost Cities’ insidious past, before it repeats itself and changes reality.")
}
var storeResults= [101,119,95, 113, 125,149]

function viewResults() {
  $('input[name=kotlcradio]:checked').val();
$('input[name=exileradio]:checked').val();
$('input[name=everblazeradio]:checked').val();
$('input[name=neverseenradio]:checked').val();
$('input[name=lodestarradio]:checked').val();
$('input[name=nightfallradio]:checked').val();

if ($('input[name=kotlcradio]:checked').val()){
  storeResults[0]++;

} else if($('input[name=exileradio]:checked').val()){
  storeResults[1]++;
} else if($('input[name=everblazeradio]:checked').val()){
  storeResults[2]++;
}else if ($('input[name=neverseenradio]:checked').val()){
storeResults[3]++;
}else if ($('input[name=lodestarradio]:checked').val()){
  storeResults[4]++;
} else if ($('input[name=nightfallradio]:checked').val()){
  storeResults[5]++
} else {

}
$('#viewResults').text("The results of Keeper of the Lost Cities are: " + storeResults[0] + "\n The results for Exile are: " + storeResults[1] +"\n The results for Everblaze are: " + storeResults[2]+"\n The results for Neverseen are: "+storeResults[3]+"\n The results for Lodestar are: "+storeResults[4]+"\n The results for Nightfall are: "+storeResults[5]);
}


function  viewSummary7() {
  window.alert ("Sophie Foster doesn’t know what—or whom—to believe. And in a game with this many players, the worst mistake can be focusing on the wrong threat. But when the Neverseen prove that Sophie’s far more vulnerable than she ever imagined, she realizes it’s time to change the rules. Her powerful abilities can only protect her so far. To face down ruthless enemies, she must learn to fight. Unfortunately, battle training can’t help a beloved friend who’s facing a whole different danger—where the only solution involves one of the biggest risks Sophie and her friends have ever taken. And the distraction might be exactly what the villains have been waiting for. In this unforgettable seventh book in the New York Times and USA TODAY bestselling Keeper of the Lost Cities series, Sophie must let the past and present blur together, because the deadliest secrets are always the ones that get erased.")
}