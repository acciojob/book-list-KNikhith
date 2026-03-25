//your JS code here. If required.
let list=document.getElementById("book-list");
let btn=document.getElementById("submit");
btn.addEventListener("click",()=>{
	let title=document.getElementById("title").value;
	let author=document.getElementById("author").value;
	let isbn=document.getElementById("isbn").value;

	let row=document.createElement("tr");
	row.innerHTML=`
		<td>${title}</td>
		<td>${author}</td>
		<td>${isbn}</td>
		<td><button class="delete">Clear</button></td>
		`;
	list.appendChild(row);
	document.getElementById("title").value="";
	document.getElementById("author").value="";
	document.getElementById("isbn").value="";
	list.addEventListener("click",(e)=>{
		if(e.target.classList.contains("delete")){
			e.target.parentElement.parentElement.remove();
		}
	})
	
})