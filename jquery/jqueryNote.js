// JQUERY
// it is a javascript library.
// it simplifies js.


// FEATURES
// 1. jquery can manipulation html elements.
// 2. jquery can apply css on html elements.
// 3. jquery can call event methods.
// 4. jquery can perform animation.
// 5. jquery simplifies ajax.


// IMPLEMENTATION
// 1. download jquery from jquery.com
// 2. use cdn link


// SELECTOR
// * jquery selector are used to select html elements based on their name, id, class, type, attributes etc.
// * $() -> for use jquery selector


// TYPEOFSELECTOR
// 1. element selector - this selector selects elements based on the element name.
// ex -> $("element_name")
// 2. id selector - this selector uses id attribute to select elements.
// ex -> $("#id_name")
// 3. class selector - this selector uses class attribute to select elements.
// ex -> $(".class_name")


// EVENT
// click, dblclick, mouseenter, mouseleave, keypress, keyup, keydown, submit, change, load etc.


// METHODS (part 1)
// hide, show, toggle
// 1. hide -> for hide html element.
// ex -> $("id_name").hide(1000) -> it will takes 1 second for hide element.
// 2. show -> for show html element.
// ex -> $("id_name").show("slow") -> it will show element slowly.
// 3. toggle -> for hide and show element.
// ex -> $("id_name").toggle()


// METHODS (part 2)
// fade -> it is used to fade in element.
// fadeIn, fadeOut, fadeToggle, fadeTo
// 1. fadeIn -> for visible an element.
// ex -> $("id_name").fadeIn(1000) -> it will takes 1 second for show element.
// 2. fadeOut -> for unvisible an element.
// ex -> $("id_name").fadeOut("slow") -> it will hide element slowly.
// 3. fadeToggle -> for visible and unvisible an element.
// ex -> $("id_name").fadeToggle()
// 4. fadeToggle -> for fade an element.
// ex -> $("id_name").fadeTo("slow",0.5) -> it will takes two parameter first is speed and second is opecity.


// METHODS (part 3)
// slide methods -> for create sliding effect on html elements
// slideUp, slideDown, slideToggle
// 1. slideUp -> it is used to slide up an element.
// ex -> $("#id_name").slideUp(1000)
// 2. slideDown -> it is used to slide down an element.
// ex -> $("#id_name").slideDown("slow")
// 3. slideToggle -> it is used to toggle between slide up and slide down.
// ex -> $("#id_name").slideToggle()


// METHODS (part 4)
// animations - for create animation on html element.
// ex -> $("#id_name").animate({property:value,property:value},millisecond)


// METHODS (part 5)
// traversing methods -> parent, parents, children, find
// 1. parent -> it returns direct parent element of the selected element.
// ex -> $("#id_name").parent()
// 2. parents -> it returns all ancestor of the selected element.
// ex -> $("#id_name").parents()
// 3. children -> it returns the direct children of the selected element.
// ex -> $("#id_name").children()
// 4. find -> it returns descendent elements of the selected element.
// ex -> $("#id_name").find("element_name")
// ex -> $("#id_name").find("*") -> return all descendent element.


// ancestors - it is a parent, grandparent, greate grandparent of an element.
// descendent - it is a child, grandchild, greate grand child of an element.


// METHODS (part 6)
// get content methods -> text, html, val, attr
// 1. text -> returns the text content of selected elements.
// ex -> $("#id_name").text()
// 2. html -> returns the content of selected elements including html.
// ex -> $("#id_name").html()
// 3. val -> returns the value of form fields.
// ex -> $("#id_name").val()
// 4. val -> returns the value of attribute.
// ex -> $("#id_name").attr("attribute_name")


// METHODS (part 7)
// set content methods -> text, html, val
// 1. text -> set the text content of selected elements.
// ex -> $("#id_name").text("text_value")
// 2. html -> set the content of selected elements including html.
// ex -> $("#id_name").html("content")
// 3. val -> set the value of form fields.
// ex -> $("#id_name").val("value")
// 4. val -> set the value of attribute.
// ex -> $("#id_name").attr("attribute_name","attribute_value")


// METHODS (part 8)
// add content methods -> append, prepend, after, before
// 1. append -> add content at the end of the selected elements.
// ex -> $("#id_name").append("text_value")
// 2. prepend -> add content at the beginning of the selected elements.
// ex -> $("#id_name").prepend("text_value")
// 3. after -> add content after the selected elements.
// ex -> $("#id_name").after("text_value")
// 4. before -> add content before the selected elements.
// ex -> $("#id_name").before("text_value")


// METHODS (part 9)
// remove methods -> remove, empty
// 1. remove - > removes the selected element.
// ex -> $("p").remove() -> it will remove all paragraph.
// ex -> $("p").remove("#id_name") -> it will removes paragraph who have this id.
// 2. empty - > removes the child elements from the selected element.
// ex -> $("div").empty()


// METHODS (part 10)
// css manipulation methods -> addClass, removeClass, toggleClass
// 1. addClass -> Adds one or more classes to the selected elements.
// ex -> $("p,h5").addClass("class_name1 class_name2") -> add two classes on p and h5 element.
// 2. removeClass -> Removes one or more classes from the selected elements.
// ex -> $("p,h5").removeClass("class_name") -> remove two classes from p and h5 element.
// 3. toggleClass -> Toggles between adding/removing classes from the selected elements.
// ex -> $("p").toggleClass("class_name")


// METHODS (part 11)
// dimensions methods -> width, height, innerWidth, innerHeight, outerWidth, outerHeight
// 1. width -> set or returns the width of an element(excludes padding, border and margin).
// ex -> $("#id_name").width()
// ex -> $("#id_name").width("100px") -> it will set element width to 100px.
// 2. height -> set or returns the height of an element(excludes padding, border and margin).
// ex -> $("#id_name").height()
// 3. innerWidth -> returns the width of an element(including padding).
// ex -> $("#id_name").innerWidth()
// 4. innerHeight -> returns the height of an element(including padding).
// ex -> $("#id_name").innerHeight()
// 5. outerWidth -> returns the width of an element(including padding and border).
// ex -> $("#id_name").outerWidth()
// 6. outerHeight -> returns the height of an element(including padding and border).
// ex -> $("#id_name").outerHeight()


// METHODS (part 12)
// css methods -> it will sets or returns one or more style properties for the selected elements.
// ex -> $("#id_name").css("property_name") -> it will return value of property
// ex -> $("#id_name").css("property_name","value") -> it will set value of property