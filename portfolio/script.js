const contactInfo = document.querySelectorAll('.contact')

contactInfo.forEach(contactElement => {
    contactElement.addEventListener('click', () => {
        navigator.clipboard.writeText(contactElement.getElementsByTagName('p')[0].innerHTML)
                                                        // get nodeList    [first]
        // forech remove .copied
        contactInfo[0].getElementsByTagName('i')[0].classList.remove("copied")
        contactInfo[1].getElementsByTagName('i')[0].classList.remove("copied")
        
        contactElement.getElementsByTagName('i')[0].classList.add("copied")
    })
})
