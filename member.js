function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberValue = skillsMember.value;
    var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;
    var skillsMemberOption = document.createElement("option");
    var skillsMemberOptionText = document.createTextNode(skillsMemberText);
    skillsMemberOption.appendChild(skillsMemberOptionText);
    skills.appendChild(skillsMemberOption);
    skillsMember.remove(skillsMember.selectedIndex);
}