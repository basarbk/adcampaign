# Advertisement Campaigns

Advertisement Campaigns is a web application to demonstrate basic web development skills on both server side and client side. Java is used on backend, and Javascript is used on frontend code.


## Implementation Details

### Backend
Backend is implemented with Spring Boot. Spring Data is used for database layer. Embedded in memory H2 database is used. Backend codes are located under `backend` folder.
Project is implemented with TDD approach.

Backend behavior is limited to the requirements where its serving the predefined campaigns only. There is no endpoints for saving new campaigns. Or there is no functionality to update an existing campaign.

Basically it has endpoint for pulling all campaigns and pulling campaigns based on their id.

`data.json` is added as a resource to backend code. It's loaded when the application is started, and mapping the content of file into entities and persisting them to H2 database. Also backend contains static image files provided in the task repository.

Tech Stack for backend:
- Spring Boot, Spring Data
- H2 (in memory mode)
- JUnit
- Mockito
- AssertJ

### Frontend

Frontend is implemented with [React](https://facebook.github.io/react/). It is created with facebook's starter kit [Create react app](https://github.com/facebookincubator/create-react-app) . Used [axios](https://github.com/mzabriskie/axios) library for api calls. [Material UI](https://material-ui.com) components are used with their almost default styling. [React Router](https://reacttraining.com/react-router/) is used for client side routing. Frontend codes are under `frontend` folder.

SVG icons of each platform are added to project. Icons are downloaded from flaticon.com

- google: https://www.flaticon.com/free-icon/search_281764#term=google&page=1&position=17

- instagram: https://www.flaticon.com/free-icon/instagram_174855#term=instagram&page=1&position=1

- facebook: https://www.flaticon.com/free-icon/facebook_174848#term=facebook&page=1&position=2

[Jest](https://jestjs.io/) and [enzyme](https://airbnb.io/enzyme/) used for testing.


Client has two main pages.
- Home page is the root page where the existing campaigns are listed. Home page also have fail condition layouts to inform user when there are no campaigns or when there is failure loading the campaigns from backend.
- Campaign Detail page is for details of selected campaign. Each platform has its own card to display all details on this page. I preferred to use collapsible component to show/hide sub entities, like Target Audience, Insights of each platform. I thought user would prefer to compare side by side each platform's sub entities. So collapsible component is a good fit to achieve that.

---
## Build

This project requires `Java 8` and [maven](http://maven.apache.org/) for building it.

Frontend javascript codes are build with npm scripts. Maven is taking care of it with [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin)

### Building client and backend bundled jar

Execute following command under `/backend` folder build project
```
mvn package -Pbundle
```
This will be building the client code first. Client output will be copied into backend projects `/backend/src/main/resources/static` folder. Spring is accessing this folder by default when root url is requested and it returns `index.html` copied to this folder.
Final jar file will be located under `/backend/target`.

## Running jar file

Application can be started with following command in `/backend` folder
```
java -jar target\adcampaign-0.0.1-SNAPSHOT.jar
```

Open http://localhost:8080 in your browser to use the application.

## Dockerizing
After building the project as bundled jar file, docker image can be created with following command under `/backend` folder.
```
docker build -t basarbk/adcampaign .
```

after the docker image is built, it can be executed with following command
```
docker run -d -p 80:8080 basarbk/adcampaign
```

Application can be accessed on web browser with docker ip.
http://192.168.99.100

> I tried to integrate `docker-maven-plugin` from spotify to maven build process, but due to technical issues in my local machine and limited time for completing the project, I couldn't verify if that would properly build the docker image. So I commented out the section of that plugin from pom.

---
## Alternatives for building and running
### Building Projects Separately
For building client code separately, `npm` must be installed which is coming with [nodejs](https://nodejs.org/en/).

To load frontend dependencies go to `/frontend` folder and execute
```
npm install
```

Then build execute
```
npm run build
```

After frontend build completed, for building backend code, execute following command under `/backend` folder
```
mvn package
```


### Running application in development mode
If you would like to run the application in development mode 

To load frontend dependencies go to `/frontend` folder and execute
```
npm install
```

run the spring boot with following command under /backend folder
```
mvn spring-boot:run
```

then run the frontend server with following command under `/frontend` folder
```
npm start
```

This will open http://localhost:9876 in your browser.

With this mode, frontend will be served by webpack dev server, and all the backend calls from UI actions will be proxied to spring boot (which will running at http://localhost:8080)
