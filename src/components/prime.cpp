int main()
{
        int temp;
        int d,count=0;
        while(temp>0)
        {
            d=temp%10;
            temp=temp/10;
            if(N%d==0)
                count++;
            
        }
        cout<< count;
        }