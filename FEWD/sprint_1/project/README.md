## Assignment: ARK Studio

### Problem Statement

You are working in the big firm as front-end engineer. Your company like to hear ideas of startup and provides digital media services to it's clientele. As a front end engineer you need to create a website for your company so that client just go through your website page and they will get to know about your comapny and want services you guys are providing. Now let's create a portfolio site for your company. 

![Template.png](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_1/project/img/template.jpg)

**Note: This project will be evaluated. To understand how to go about it, kindly watch this [video walkthrough](https://vimeo.com/383940265/d48675eeed)**


### User Story 1:

User should have website's navigation bar to help him traverse the website

*Reference image:*
![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_1/project/img/us_1.PNG)


#### Details: 

- Create a `header` with class name `"transparent_nav"`. 

- Inside the header, create a `nav` element with class name `"nav_bar"`.

- The `nav` element should have have an unordered list(`ul`) with id `"nav_list"` and have four children `li` items
	- The list items should be `<a>` elements with the ids: `"nav_item_1"`,`"nav_item_2"`,`"nav_item_3"`,`"nav_item_4"`
	
	- The `<a>` should have the link text: "Our Story", "Products", "Journal" & "Contact" (mapped in the same order i.e. `nav_item_1` has text `"Our Story"`, `nav_item_2` has text "Products" and so on and so forth)


- Additionally, the header should be transparent i.e. it's 
background-color property should have alpha value=0.7 

- Add the ark studio logo to the left of nav bar

- Ensure that the nav bar is always on top irrespective of your scrolling

*Reference image:*
![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_1/project/img/nav_bar.gif)

- Add remaining CSS styling of your choice


### User Story 2:

User should have a call to action(CTA) bar for contacting the company


*Reference image:*
![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_1/project/img/us_2.PNG)

#### Details


- Create a `section` element with class name `"cta"`. 

	- Inside the section, create a `p` element with id `"cta_text"` and text: "Have a project in mind? We would love to hear from you!"

	- Inside the section, create a `a` element with id `"cta_link"` and text: "GET IN TOUCH WITH US"

- On hovering on the `"cta"` element, the color should change 

- Add remaining CSS styling of your choice



# User Story 3:

User should have a view of the services provided by the company


*Reference image:*
![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_1/project/img/us_3.PNG)

## Details

- Create a `section` element with class name `"services wrapper"`. 

- Inside the section, there should be three unordered `li` items. 

- Each `li` item should discuss the different services provided by the company 
- Add the associated images with each list item

- Add remaining CSS styling of your choice
 


# User Story 4:

User should have a view of the previous project history of the company

*Reference image:*
![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_1/project/img/us_4.PNG)

## Details


- Create a `section` element with class name `"recent_work"`. 

- Inside the section, there should be five `img` items. 

- Each `img` item should be a pictorial representation of their recent work.

- Add hovering for the `img` elements 
- Add remaining CSS styling of your choice

# User Story 5:

User should have a view of company's testimonials

*Reference image:*
![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_1/project/img/us_5.PNG)

## Details


- Create a `section` element with class name `"testimonials wrapper"`.

- Inside the section, there should be three unordered `li` items. 

- Each `li` item should show the different testimonials provided to the company by the customers(i.e. Each item must have associated image and testimonial message)

Refer the following image for the same:


# User Story 6:

User should have a footer widget with "Location", "Company Vision" ,"Support", "About" details 
 
*Reference image:*
![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_1/project/img/us_6.PNG)

## Details



- Create a `footer` element

- Inside the `footer`, create a `footer_widget` element and four different `div` elements. 

- The first div should have heading as 'Location' with associated location text. Add relevant social icons 

*Reference image:*

![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_1/project/img/us_61.PNG)



- The second div should have heading as 'Company'
	- The `div` element should have have an unordered list(`ul`) with id `"comp_list"` and have four children `li` items
	- The list items should be `<a>` elements with the ids: `"comp_item_1"`,`"comp_item_2"`,`"comp_item_3"`,`"comp_item_4"`
	- The `<a>` should have the link text: "Our Story", "Mission", "Journal" & "Careers" (mapped in the same order i.e. `comp_item_1` has text `"Our Story"`, `comp_item_2` has text "Journal" and so on and so forth)

*Reference image:*

![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_1/project/img/us_62.PNG)

- The third div should have heading as 'Support'
	- The `div` element should have have an unordered list(`ul`) with id `"sup_list"` and have three children `li` items
	- The list items should be `<a>` elements with the ids: `"sup_item_1"`,`"sup_item_2"`,`"sup_item_3"`
	- The `<a>` should have the link text: "FAQ", "Contact Us", "Policies" (mapped in the same order i.e. `sup_item_1` has text `"FAQ"`, `sup_item_2` has text "Contact Us" and so on and so forth)

*Reference image:*

![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_1/project/img/us_63.PNG)
	
- The fourth div should have heading as 'ARK Studio' with associated company details text. 

*Reference image:*

![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_1/project/img/us_64.PNG)

- Inside the `footer` at the bottom of the page, create a `p` element with class `"rights"` and text: "� 2014 ARK Studio  -  All Rights Reserved"

*Reference image:*

![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_1/project/img/us_65.PNG)


- Add remaining CSS styling of your choice.

