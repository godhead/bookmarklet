var i = document.createElement('iframe'),
	fid = 'qr067572';
i.setAttribute('name', fid);
i.setAttribute('id', fid);
c = 'right:20px;top:20px;width:180px;height:200px;';
i.setAttribute('style', 'z-index: 2147483647; position: fixed; border: 2px solid #eaeaea;' + c );
document.body.appendChild(i);

window[fid].document.write('<!DOCTYPE html><html><body style="color: #555; background-color: #fff; text-align: center; margin: 0 auto; font-size: 26px;">' + '<img src="https://chart.googleapis.com/chart?cht=qr&chs=160x160&choe=UTF-8&chld=L|1&chl='+top.window.location.href+'"/><div><a href="#" onclick="_qrclose();">[ Close ]</a></div>' + '<scr' + 'ipt>function _qrclose(){var f = top.document.getElementById("' + fid + '");f.style.display = "none";f.parentNode.removeChild(f);} </scr' + 'ipt>' + '</body></html>');