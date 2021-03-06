# Generated by Django 2.0.5 on 2018-06-23 13:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('redditapp', '0002_auto_20180623_1904'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='parent_comment',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='redditapp.Comment'),
        ),
        migrations.AlterField(
            model_name='post',
            name='comments',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='redditapp.Comment'),
        ),
        migrations.AlterField(
            model_name='subreddit',
            name='moderators',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='moderates', to='redditapp.Profile'),
        ),
        migrations.AlterField(
            model_name='subreddit',
            name='owner',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='subreddits', to='redditapp.Profile'),
        ),
        migrations.AlterField(
            model_name='subreddit',
            name='posts',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='redditapp.Post'),
        ),
        migrations.AlterField(
            model_name='subreddit',
            name='subscribers',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='subscriptions', to='redditapp.Profile'),
        ),
    ]
