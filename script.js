function heavyOperation() {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
        result += Math.random() * Math.sin(i) * Math.cos(i);
    }
    return result;
}

const heavyResult = heavyOperation();
console.log('Operação concluída:', heavyResult);

function createDynamicContent() {
    const adBanner = document.getElementById('dynamic-ad');
    if (adBanner) {
        setTimeout(() => {
            adBanner.innerHTML = `
                <div style="background: linear-gradient(45deg, #ff6b6b, #4ecdc4); 
                           padding: 20px; color: white; font-size: 18px; font-weight: bold;">
                    🎉 OFERTA ESPECIAL: 50% OFF em todos os produtos! 
                    <button style="background: white; color: #333; border: none; 
                                   padding: 10px 20px; margin-left: 20px; border-radius: 5px; 
                                   cursor: pointer;">Aproveitar Agora</button>
                </div>
            `;
            adBanner.style.height = '80px';
        }, 2000);
    }

    const carousel = document.getElementById('testimonial-carousel');
    if (carousel) {
        setTimeout(() => {
            const testimonials = [
                {
                    text: "Produto incrível! Superou todas as minhas expectativas.",
                    author: "Maria Silva",
                    rating: 5
                },
                {
                    text: "Qualidade excepcional e entrega rápida. Recomendo!",
                    author: "João Santos",
                    rating: 5
                },
                {
                    text: "Melhor smartphone que já tive. Vale cada centavo!",
                    author: "Ana Costa",
                    rating: 5
                }
            ];

            let currentTestimonial = 0;

            function showTestimonial(index) {
                const testimonial = testimonials[index];
                carousel.innerHTML = `
                    <div class="carousel-title">O que nossos clientes dizem</div>
                    <div style="max-width: 600px; margin: 0 auto; padding: 40px; 
                               background: rgba(255,255,255,0.1); border-radius: 12px;">
                        <div style="font-size: 20px; margin-bottom: 20px; font-style: italic;">
                            "${testimonial.text}"
                        </div>
                        <div style="font-size: 16px; font-weight: bold;">
                            - ${testimonial.author}
                        </div>
                        <div style="margin-top: 10px;">
                            ${'⭐'.repeat(testimonial.rating)}
                        </div>
                    </div>
                `;
            }

            showTestimonial(currentTestimonial);

            setInterval(() => {
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                showTestimonial(currentTestimonial);
            }, 3000);

        }, 1500);
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        setTimeout(() => {
            contactForm.innerHTML = `
                <form style="background: white; padding: 40px; border-radius: 12px; 
                           box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600;">Nome:</label>
                        <input type="text" style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; 
                                                 border-radius: 6px; font-size: 16px;">
                    </div>
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600;">Email:</label>
                        <input type="email" style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; 
                                                  border-radius: 6px; font-size: 16px;">
                    </div>
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600;">Mensagem:</label>
                        <textarea style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; 
                                        border-radius: 6px; font-size: 16px; height: 120px; resize: vertical;"></textarea>
                    </div>
                    <button type="submit" style="background: #2563eb; color: white; padding: 12px 30px; 
                                                border: none; border-radius: 6px; font-size: 16px; 
                                                font-weight: 600; cursor: pointer; width: 100%;">
                        Enviar Mensagem
                    </button>
                </form>
            `;
        }, 3000);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < 100000; i++) {
        const div = document.createElement('div');
        div.innerHTML = 'Elemento temporário ' + i;
        document.body.appendChild(div);
        document.body.removeChild(div);
    }

    createDynamicContent();

    document.querySelectorAll('*').forEach(element => {
        element.addEventListener('mouseover', function() {
            console.log('Mouse over:', element.tagName);
        });
    });
});

function continuousOperation() {
    const start = Date.now();
    while (Date.now() - start < 10) {
        Math.random();
    }

    setTimeout(continuousOperation, 50);
}

setTimeout(continuousOperation, 5000);

window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;

    for (let i = 0; i < 1000; i++) {
        Math.sin(scrollPosition + i);
    }

    const header = document.querySelector('.header');
    if (header) {
        if (scrollPosition > 100) {
            header.style.background = 'rgba(255,255,255,0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#fff';
            header.style.backdropFilter = 'none';
        }
    }
});

window.addEventListener('resize', function() {
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        element.style.width = rect.width + 'px';
        element.style.height = rect.height + 'px';
        element.style.width = '';
        element.style.height = '';
    });
});

$(document).ready(function() {
    console.log('jQuery carregado - executando operações desnecessárias');

    $('div div div').each(function() {
        $(this).css('position', 'relative');
    });

    $('.product-item').hover(
        function() {
            $(this).animate({
                'margin-top': '-10px',
                'box-shadow': '0 8px 30px rgba(0,0,0,0.2)'
            }, 200);
        },
        function() {
            $(this).animate({
                'margin-top': '0px',
                'box-shadow': '0 4px 20px rgba(0,0,0,0.1)'
            }, 200);
        }
    );
});

function unusedFunction1() {
    return "Esta função nunca é chamada";
}

function unusedFunction2() {
    const largeArray = new Array(10000).fill('dados desnecessários');
    return largeArray;
}

function unusedFunction3() {
    for (let i = 0; i < 50000; i++) {
        console.log('Operação desnecessária', i);
    }
}

var globalVar1 = new Array(1000).fill('dados');
var globalVar2 = 'string global desnecessária';
var globalVar3 = { dados: 'objeto global desnecessário' };

let memoryLeakArray = [];
setInterval(() => {
    memoryLeakArray.push(new Array(1000).fill('leak'));
    if (memoryLeakArray.length > 100) {
        memoryLeakArray = memoryLeakArray.slice(-50);
    }
}, 1000);