# U+AI

![U+AI preview demo](u+ai_preview_demo.gif)

## Get Started
* Go to https://my-annotation-tool.herokuapp.com/
* Test out the annotation tool!
    * More instructions on how to use the tool: https://universaldatatool.github.io/react-image-annotate/#usage
* When you're ready, click _Get Started ->_ and create your profile with Google.
* Click "Upload Data" to upload your data. The column _image_url_ should contain the links to your images.
* Go to the "Customize Task" page to edit your instructions and ontology.
* Once you have uploaded data and customized your task, click the "PREVIEW" button (top right) to preview your task.
* WIP: Publishing your task. See below to monitor the progress of these features:

## Up Next:

You can track all ongoing bugs and feature improvements here:
https://trello.com/b/q7NUQv3c/kanban

* Data Features
    * Upload csv to platform 
* Editor Features
    * Title
    * Customize which column has the links to your images
    * Additional Tool specific settings
        * Ontology
        * Tags
    * Crowd Settings
    * Facial recognition support
        * https://docs.aws.amazon.com/rekognition/latest/dg/faces-detect-images.html
* Publishing Features
    * Crowdsourcing 
        * Migration to https://github.com/Wcarpenter96/CrowdMail

## About this Application

### Technology Stack 
This Web Application uses the MERN (Mongo Atlas, Express.js, React, Node.js) stack.
### Back-end libraries
- OAuth: passport-google-oauth20
- Database Queries: mongoose
### Front-end libraries
- Annotation Tool: forked from https://github.com/UniversalDataTool/react-image-annotate
- JSON Visualizer: react-json-view
- Markdown Visualizer: marked
- Interface: material-ui
- State Handling: redux
- Middlewares: redux-thunk

Please refer to package.json and client/package.json for additional dependencies.
For any feedback, contact wc.cc96@gmail.com







