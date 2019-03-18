import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import ShuffleArray from "shuffle-array";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highScore: 0,
    // clickedImages: []
  };

  clickImage = (id) => {
    let friendArr = [...this.state.friends];
    // This creates a new variable called clickedImagesContainer that grabs the current state of the clickedImages array:

    for (let i = 0; i < friendArr.length; i++) {

      if (id === friendArr[i].id) {
        if (friendArr[i].clicked) {
          // handle our already clicked code here (restart game & reshuffle):
          
        } else {
          friendArr[i].clicked = true;
          // This increases the score:
          this.state.score++
          this.state.highScore++
          console.log(friendArr[i]);
        }
      }
    }

    friendArr = ShuffleArray(friendArr);

    this.setState({ friends: friendArr });
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

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <div>
          {this.state.score}
        </div>
        <Title>SpongeBob and Friends</Title>
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