import React from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 16,
  },
};

function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img src="https://i.namu.wiki/i/3vXxrn64PdxEk-kihDXj6UtCdQwiRrvf_d-kje02dJydUS6mO3oLt6Dl5OSP_1A_PnAOzFvGKObgHP6Jef6e7-d_dUC8Nn47poEv9d5e4Q3yv80QdWOdp_1G-JM0YFOOTqHtkptp1_fOW6EXXk6jJg.webp"
        alt="가나디"
        style={styles.image} />
      </div>

      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span sytle={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  );
}

export default Comment;