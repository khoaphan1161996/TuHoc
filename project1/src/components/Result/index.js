function Result(props) {
  const color = () => {
    return {
      color:props.color,
      fontSize:props.fontSize ,
      border:'5px solid'
    }
  }

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <p>Color : {props.color} - Fontsize : {props.fontSize}px</p>
      <div style={color()} id="content">Nội dung setting</div>
    </div>
  );
}

export default Result;
