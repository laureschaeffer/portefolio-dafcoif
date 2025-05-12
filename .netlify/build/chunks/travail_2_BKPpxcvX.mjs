const travail2 = new Proxy({"src":"/_astro/travail_2.Cfm6SJg4.jpg","width":642,"height":856,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/portefolio-dafcoif/src/assets/img/travail_2.jpg";
							}
							
							return target[name];
						}
					});

export { travail2 as t };
