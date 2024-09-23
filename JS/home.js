// menu button
const historyBtn = document.getElementById('history-button');
const donationBtn = document.getElementById('donation-button');
// sections
const donationSec =  document.getElementById('donation-section');
const historySec = document.getElementById('history-section');
// donation buttons
const noakhaliBtn = document.getElementById('noakhali-donate')
const feniBtn = document.getElementById('feni-donate')
const quotaBtn = document.getElementById('quota-donate')

// menu btn click handles
historyBtn.addEventListener('click',function(){
    donationSec.classList.add('hidden');
    historySec.classList.remove('hidden');

    historyBtn.classList.add('bg-[#B4F461]','text-[#111111B3]')
    historyBtn.classList.remove('border-2' ,'border-[#111111B3]','text-[#111111B3]')

    donationBtn.classList.remove('bg-[#b8fd5d]','text-black')
    donationBtn.classList.add('border-2' ,'border-[#111111B3]','text-[#111111B3]')


})

donationBtn.addEventListener('click',function(){
    donationSec.classList.remove('hidden');
    historySec.classList.add('hidden');

    donationBtn.classList.add('bg-[#B4F461]','text-black')
    donationBtn.classList.remove('border-2' ,'border-[rgba(17,17,17,0.3)]','text-[#111111B3]')

    historyBtn.classList.remove('bg-[#B4F461]','text-[#111111B3]')
    historyBtn.classList.add('border-2' ,'border-[rgba(17,17,17,0.3)]','text-[#111111B3]')

})

// donation handles all

// noakhali
noakhaliBtn.addEventListener('click',function(){
    
    const myBalance = getBalance('my-balance')
    const inputAmount = getInputValue('noakhali-input-value');
    const noakhaliBalance = getBalance('noakhali-balance')
    const noakhaliTitle = document.getElementById('noakhali-title').innerText;

    calculate(inputAmount,myBalance,noakhaliBalance,'noakhali-balance',noakhaliTitle);

})


// feni
feniBtn.addEventListener('click',function(){
    
    const myBalance = getBalance('my-balance')
    const inputAmount = getInputValue('feni-input-value');
    const feniBalance = getBalance('feni-balance')
    const feniTitle = document.getElementById('feni-title').innerText;

    calculate(inputAmount,myBalance,feniBalance,'feni-balance',feniTitle);

})


// quota
quotaBtn.addEventListener('click',function(){
    
    const myBalance = getBalance('my-balance')
    const inputAmount = getInputValue('quota-input-value');
    const quotaBalance = getBalance('quota-balance')
    const quotaTitle = document.getElementById('quota-title').innerText;

    calculate(inputAmount,myBalance,quotaBalance,'quota-balance',quotaTitle);

})
