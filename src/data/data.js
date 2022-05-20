const data = [
    {
        "data" : [
            {
                "type": "Header",
                "heading": "Welcome ! First things first...",
                "subheading":"You can always change them later."
            },
            {
                "type":"TextInput",
                "textId":"fullName",
                "displayLabel":"Full Name",
                "placeholder":"Steve Jobs",
                "disabled": false
            },
            {
                "type":"TextInput",
                "textId":"displayName",
                "displayLabel":"Display Name",
                "placeholder":"Steve",
                "disabled": false
            },
            {
                "type":"Button",
                "buttonText":"Create Workspace"
            }
        ]
    },
    {
        "data" : [
            {
                "type": "Header",
                "heading": "Let's set up a home for all your work",
                "subheading":"You can always create another workspace later."
            },
            {
                "type":"TextInput",
                "textId":"workspaceName",
                "displayLabel":"Workspace Name",
                "placeholder":"Eden",
                "disabled": false
            },
            {
                "type":"UrlInput",
                "textId":"urlValue",
                "labelText":"Workspace URL",
                "textPlaceholder":"Example",
                "disabledPlaceholder":"www.eden.com/",
                "disabled": false
            },
            {
                "type":"Button",
                "buttonText":"Create Workspace"
            }
        ]
    },
    {
        "data" : [
            {
                "type": "Header",
                "heading": "How are you planning to use Eden?",
                "subheading":"we'll streamline your setup experience accordingly."
            },
            {
                "type":"Select",
                "options":[
                    {
                        "heading":"For myself",
                        "subheading":"Write better. Think more clearly. Stay organized."
                    },
                    {
                        "heading":"With my team",
                        "subheading":"Wikis , docs , tasks & projects , all in one place ."
                    }
                ]
            }
        ]
    },
    {
        "data" : [
            {
                "type": "Header",
                "heading": "Congratulations , Eren !",
                "subheading":"you have completed onboarding, you can start using the Eden!"
            }
        ]
    }
];

export default data;