import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import ShuffleArray from "shuffle-array";

class App extends Component {
  // This sets this.state.friends to the friends json array:
  state = {
    friends: friends,
    score: 0,
    highScore: 0,
    // clickedImages: []
  };

  clickImage = (id) => {
    let friendArr = [...this.state.friends];
    // This creates a new variable called clickedImagesContainer that grabs the current state of the clickedImages array:

    const data = {};

    for (let i = 0; i < friendArr.length; i++) {

      if (id === friendArr[i].id) {
        if (friendArr[i].clicked) {
          // Write code that handles previously images clicked here (restarts game & reshuffles images):
          friends.forEach(friend => friend.clicked = false);
          data.friends = friends;
          data.score = 0
          console.log(friends);
          // this.setState({friends: friends, score: 0});

        } else {
          friendArr[i].clicked = true;
          // This increments the score:
          data.score = this.state.score + 1;
          data.friends = friendArr;

          // This increments and retains the high score:
          // this.state.highScore++
          console.log(friendArr[i]);
        }
      }
    }

    data.friends = ShuffleArray(data.friends);

    this.setState(data);

    // const clickedImagesContainer = this.state.clickedImages
    // This pushes the clicked image's id into the clickedImagesContainer:

    // This updates the clickImages state with the updated version of that state:
    // this.setState({ clickImages: clickedImagesContainer });
    // this.shuffleArray();
    // if (clickedImagesContainer.indexOf(id) < 0) {
    //   console.log("not in the array");

    //   // score++;
    // }
    // else {
    //   console.log("it's in the array");
    //   // score = 0;
    // }
    // clickedImagesContainer.push(id);
  }

  shuffleArray = () => {
    const shuffle = [...this.state.friends];
    const shuffledArray = ShuffleArray(shuffle);
    this.setState({ friends: shuffledArray });
  }

  // This maps over this.state.friends and renders a FriendCard component for each friend object:
  render() {
    return (
      <Wrapper>
        {/* <div className="text-center"> */}
        <Title>{`SpongeBob and Friends\n
              \nScore: ${this.state.score}`}</Title>
        {/* <h1><strong></strong></h1> */}
        {/* </div> */}
        {this.state.friends.map(friend => (
          <FriendCard
            // removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            // name={friend.name}
            image={friend.image}
            clickImage={this.clickImage}
          // occupation={friend.occupation}
          // location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;