function ExecuteScript(strId)
{
  switch (strId)
  {
      case "66DbLkPebUV":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="edu.mp3";
audio.load();
audio.play();
audio.volume = 0.4;
}

